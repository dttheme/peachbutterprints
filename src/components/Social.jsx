import Instagram from "../img/svg/logo-instagram.svg";
import React from "react";
import Tiktok from "../img/svg/logo-tiktok.svg";
import Tumblr from "../img/svg/logo-tumblr.svg";

const Social = () => {
  return (
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
  );
};

export default Social;
