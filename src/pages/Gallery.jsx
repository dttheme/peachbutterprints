import React from "react";
import ImageGallery from "react-image-gallery";
import images from "../img/images.js";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <ImageGallery items={images} lazyLoad={true} showIndex={true} />
    </div>
  );
};

export default Gallery;
