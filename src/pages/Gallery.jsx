import React from "react";
import ImageGallery from "react-image-gallery";
import images from "../img/images.js";
import Loading from "../components/Loading.jsx";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <ImageGallery items={images} showIndex={true} />
    </div>
  );
};

export default Gallery;
