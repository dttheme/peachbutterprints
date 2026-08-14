import BlurImage from "../components/BlurImage";
import { Link } from "react-router-dom";
import React from "react";
import collections from "../img/collections.json";

const GalleryIndex = () => {
  return (
    <div className="collection-grid">
      {collections.map(({ slug, title, count, cover }) => (
        <Link key={slug} to={`/gallery/${slug}`} className="collection-card">
          <BlurImage
            className="collection-cover"
            src={cover.src}
            placeholder={cover.placeholder}
            width={cover.width}
            height={cover.height}
            alt=""
            loading="lazy"
          />
          <span className="collection-title">{title}</span>
          <span className="collection-count">
            {count} {count === 1 ? "image" : "images"}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default GalleryIndex;
