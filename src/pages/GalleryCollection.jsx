import "react-image-gallery/styles/css/image-gallery.css";

import { Navigate, useParams } from "react-router-dom";

import BlurImage from "../components/BlurImage";
import ImageGallery from "react-image-gallery";
import Loading from "../components/Loading";
import React from "react";
import toGalleryItems from "../img/images";

// Each collection becomes its own chunk, so opening one issue never downloads
// the manifests and placeholders of every other issue.
const manifests = import.meta.glob("../img/collections/*.json");

const GalleryCollection = () => {
  const { slug } = useParams();
  const load = manifests[`../img/collections/${slug}.json`];
  const [collection, setCollection] = React.useState(null);

  React.useEffect(() => {
    let active = true;
    setCollection(null);

    if (load) {
      load().then((module) => {
        if (active) setCollection(module.default);
      });
    }

    return () => {
      active = false;
    };
  }, [slug]);

  if (!load) return <Navigate to="/gallery" replace />;
  if (!collection) return <Loading />;

  return (
    <div className="gallery-wrapper">
      <h2 className="collection-heading">{collection.title}</h2>
      <ImageGallery
        items={toGalleryItems(collection)}
        showIndex={true}
        lazyLoad={true}
        renderItem={(item) => (
          <BlurImage
            className="gallery-slide"
            imageClassName="image-gallery-image"
            src={item.original}
            placeholder={item.placeholder}
            width={item.originalWidth}
            height={item.originalHeight}
            alt={item.originalAlt}
            loading={item.loading}
          />
        )}
      />
    </div>
  );
};

export default GalleryCollection;
