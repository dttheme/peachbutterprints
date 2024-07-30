import React from "react";
import faceGif from "../img/face.gif";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <img
        src={faceGif}
        alt="an animated gif of different emotive smiley faces"
        height="30px"
      />
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
