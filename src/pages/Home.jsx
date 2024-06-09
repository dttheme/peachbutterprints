import Card from "../components/Card";
import KofiButton from "kofi-button";
import React from "react";
import faceGif from "../img/face.gif";

const Home = () => {
  return (
    <Card>
      <div></div>
      <div className="about-grid">
        <img
          src={faceGif}
          alt="an animated gif of different emotive smiley faces"
        />
        <div>
          <p>
            Welcome to Peach Butter Prints! Offering one-of-a-kind linocut
            prints and vibrant digital illustrations. Whether you're an art
            lover, collector, or looking for a unique commission, explore my
            gallery and add a splash of creativity to your life.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Home;
