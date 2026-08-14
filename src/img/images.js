// Turns a generated collection manifest into react-image-gallery items,
// adding the presentation-only fields the build step has no business knowing.
export default function toGalleryItems({ title, unit, images }) {
  return images.map((image, index) => {
    const label = `${title}, ${unit} ${index + 1}`;

    return {
      ...image,
      originalAlt: label,
      thumbnailAlt: label,
      loading: index === 0 ? "eager" : "lazy",
      thumbnailLoading: index === 0 ? "eager" : "lazy",
    };
  });
}
