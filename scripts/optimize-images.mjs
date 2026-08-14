import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

// Full-resolution originals live outside public/ so they are never deployed.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "source-images");
const publicImagesDir = path.join(root, "public", "images");
const imgDir = path.join(root, "src", "img");
const collectionsDir = path.join(imgDir, "collections");

// Square art fits the 600px content column at retina; collections of taller
// pages override this so lettering stays readable on a phone.
const DEFAULT_DISPLAY_WIDTH = 800;
const THUMB_WIDTH = 120;
const COVER_SIZE = 400;
const BACKGROUND_WIDTH = 800;
const QUALITY = 80;

// Inlined into the bundle as a data URI, so it must stay tiny.
const PLACEHOLDER_WIDTH = 20;

const byName = new Intl.Collator("en", { numeric: true }).compare;
const isPng = (file) => path.extname(file).toLowerCase() === ".png";

async function isStale(source, output) {
  try {
    const [sourceStat, outputStat] = await Promise.all([
      stat(source),
      stat(output),
    ]);
    return sourceStat.mtimeMs > outputStat.mtimeMs;
  } catch {
    return true;
  }
}

// Always reports the real dimensions, whether it rebuilt the file or not, so
// the manifest can never drift from what is actually on disk.
async function toWebp(source, output, resize) {
  if (await isStale(source, output)) {
    const { width, height } = await sharp(source)
      .resize(resize)
      .webp({ quality: QUALITY })
      .toFile(output);

    return { width, height };
  }

  const { width, height } = await sharp(output).metadata();
  return { width, height };
}

// A heavily downscaled copy, stretched and blurred by CSS, so an image shows
// the right colours immediately instead of flashing empty while it loads.
async function toPlaceholder(source) {
  const buffer = await sharp(source)
    .resize({ width: PLACEHOLDER_WIDTH })
    .webp({ quality: 35 })
    .toBuffer();

  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function readConfig(dir) {
  try {
    return JSON.parse(await readFile(path.join(dir, "collection.json"), "utf8"));
  } catch {
    return {};
  }
}

// Filenames rarely match reading order, so a collection can name its own
// sequence. Anything left out sorts naturally after it, which means a newly
// added page shows up at the end rather than silently going missing.
function readingOrder(order) {
  const rank = new Map(order.map((name, index) => [String(name), index]));

  return (a, b) => {
    const nameA = path.basename(a, path.extname(a));
    const nameB = path.basename(b, path.extname(b));
    const rankA = rank.get(nameA) ?? Infinity;
    const rankB = rank.get(nameB) ?? Infinity;

    return rankA === rankB ? byName(nameA, nameB) : rankA - rankB;
  };
}

async function optimizeCollection(slug) {
  const dir = path.join(sourceDir, slug);
  const config = await readConfig(dir);
  const order = config.order ?? [];

  const files = (await readdir(dir)).filter(isPng).sort(readingOrder(order));
  if (files.length === 0) return null;

  const present = new Set(files.map((file) => path.basename(file, ".png")));
  for (const name of order) {
    if (!present.has(String(name))) {
      console.warn(`  ${slug}: "order" lists ${name}, which has no PNG`);
    }
  }

  const title = config.title ?? slug;
  const unit = config.unit ?? "image";
  const displayWidth = config.displayWidth ?? DEFAULT_DISPLAY_WIDTH;

  const outDir = path.join(publicImagesDir, slug);
  const thumbsDir = path.join(outDir, "thumbs");
  await mkdir(thumbsDir, { recursive: true });

  const images = await Promise.all(
    files.map(async (file) => {
      const name = path.basename(file, path.extname(file));
      const source = path.join(dir, file);

      const [original, thumbnail, placeholder] = await Promise.all([
        toWebp(source, path.join(outDir, `${name}.webp`), {
          width: displayWidth,
          withoutEnlargement: true,
        }),
        toWebp(source, path.join(thumbsDir, `${name}.webp`), {
          width: THUMB_WIDTH,
          withoutEnlargement: true,
        }),
        toPlaceholder(source),
      ]);

      return {
        original: `/images/${slug}/${name}.webp`,
        thumbnail: `/images/${slug}/thumbs/${name}.webp`,
        placeholder,
        originalWidth: original.width,
        originalHeight: original.height,
        thumbnailWidth: thumbnail.width,
        thumbnailHeight: thumbnail.height,
      };
    })
  );

  const coverFile = config.cover ? `${config.cover}.png` : files[0];
  const coverSource = path.join(dir, coverFile);
  const [cover, coverPlaceholder] = await Promise.all([
    toWebp(coverSource, path.join(outDir, "cover.webp"), {
      width: COVER_SIZE,
      height: COVER_SIZE,
      fit: "cover",
    }),
    toPlaceholder(coverSource),
  ]);

  await writeFile(
    path.join(collectionsDir, `${slug}.json`),
    `${JSON.stringify({ slug, title, unit, images }, null, 2)}\n`
  );

  return {
    slug,
    title,
    count: images.length,
    cover: {
      src: `/images/${slug}/cover.webp`,
      width: cover.width,
      height: cover.height,
      placeholder: coverPlaceholder,
    },
  };
}

async function optimizeCollections() {
  await mkdir(collectionsDir, { recursive: true });

  const slugs = (await readdir(sourceDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(byName);

  const collections = (await Promise.all(slugs.map(optimizeCollection))).filter(
    Boolean
  );

  await writeFile(
    path.join(imgDir, "collections.json"),
    `${JSON.stringify(collections, null, 2)}\n`
  );

  return collections;
}

const [collections] = await Promise.all([
  optimizeCollections(),
  toWebp(path.join(imgDir, "19.png"), path.join(imgDir, "19.webp"), {
    width: BACKGROUND_WIDTH,
    withoutEnlargement: true,
  }),
]);

const total = collections.reduce((sum, { count }) => sum + count, 0);
console.log(
  `Optimized ${total} images across ${collections.length} collection(s): ` +
    collections.map(({ slug, count }) => `${slug} (${count})`).join(", ")
);
