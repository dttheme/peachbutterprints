import React from "react";
import Instagram from "../../svg/logo-instagram.svg";
import Tiktok from "../../svg/logo-tiktok.svg";
import Tumblr from "../../svg/logo-tumblr.svg";
import Card from "./Card";

const Social = () => {
  return (
    <Card>
      <div className="social">
        <a
          href="https://www.instagram.com/peachbutterprints/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@peachbutterprints"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Tiktok} alt="Tiktok" />
        </a>
        <a
          href="https://www.tumblr.com/peachbutterprints"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Tumblr} alt="Tumblr" />
        </a>
      </div>
    </Card>
  );
};

export default Social;
