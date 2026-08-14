# Nano React App Default Javascript Template

The default template project for [nano-react-app](https://github.com/nano-react-app/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `5173`.
- `npm run build` — This will output a production build in the `dist` directory.
- `npm run preview` — This will run the production build locally with a default port of `5173` (this will not work if you haven't generated the production build yet).

## Gallery collections

`/gallery` lists collections; each one opens at `/gallery/<folder-name>`.

Full-resolution originals live in `source-images/<collection>/` and are never
deployed. `npm start` and `npm run build` both run `scripts/optimize-images.mjs`
first, which writes resized WebP copies, thumbnails, square covers and a set of
tiny blurred previews. Everything it produces is ignored by git, so it always
matches the sources — run a script once after cloning.

Each folder holds a `collection.json`:

```json
{
  "title": "Peach Pulp 1",
  "displayWidth": 1080,
  "unit": "page"
}
```

- `title` is what shows on the gallery index. Defaults to the folder name.
- `displayWidth` is the width images are served at. Use 800 for square art; comic
  pages use their native 1080 so lettering stays readable on a phone.
- `unit` is used in alt text ("Peach Pulp 1, page 3"). Defaults to `image`.
- `cover` optionally names the image to use on the index. Defaults to the first.
- `order` optionally lists filenames (without `.png`) in reading order.

Without `order`, images sort by filename numerically, so `1.2` comes before
`1.10`. Add `order` when the filenames do not match the sequence you want:

```json
"order": ["cover", "title-page", "page-01", "page-02"]
```

Anything missing from `order` sorts naturally after it, so a page you forget to
list still appears at the end instead of disappearing. A name in `order` with no
matching PNG prints a warning during the build.

To add a new issue: create `source-images/peach-pulp-2/`, add a `collection.json`,
drop the pages in, and run `npm start`. No code changes.

Run `npm run optimize-images` on its own to regenerate without starting anything.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- --port 3000
```

Or edit the `start` script directly:

```
vite --port 3000
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements anywhere in your Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/nano-react-app/babel-preset-nano-react-app) is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.


## Deploy to GitHub Pages

You can also deploy your project using GitHub pages.
First install the `gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

Use the following scripts for deployment:

```js
"scripts": {
  "start": "vite",
  "build": "vite build",
  "predeploy": "rm -rf dist && vite build",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.
