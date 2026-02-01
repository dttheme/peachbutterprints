import ImageGallery from "react-image-gallery";
import Loading from "../components/Loading";
import React from "react";
import images from "../img/images";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <ImageGallery items={images} showIndex={true} />
    </div>
  );
};

export default Gallery;
