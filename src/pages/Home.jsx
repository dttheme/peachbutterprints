import React from "react";
import Card from "../components/Card";

const StyledKofiButton = () => {
  return (
    <KofiButton
      color="#A68E87"
      title="Buy me a cup of coffee?"
      kofiID="R6R4U053I"
    />
  );
};

import faceGif from "../img/face.gif";
import KofiButton from "kofi-button";

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
          <p>Artist and software engineer based in Atlanta.</p>

          <p>
            {" "}
            Prints now available for sale on{" "}
            <a
              href="https://peachbutterprints.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopify
            </a>
          </p>
        </div>
      </div>
      <div className="kofi-wrapper">
        <StyledKofiButton />
      </div>
    </Card>
  );
};

export default Home;
