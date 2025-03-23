import Instagram from "../img/svg/logo-instagram.svg";
import Linktree from "../img/linktree.png";
import React from "react";
import Tiktok from "../img/svg/logo-tiktok.svg";
import Tumblr from "../img/svg/logo-tumblr.svg";
import Twitch from "../img/svg/logo-twitch.svg";

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
        href="https://www.twitch.tv/peachbutterprints"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Twitch} alt="Twitch" />
      </a>
      <a
        href="https://www.tumblr.com/peachbutterprints"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Tumblr} alt="Tumblr" />
      </a>
      <a
        href="https://www.tiktok.com/@peachbutterprints"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Tiktok} alt="Tiktok" />
      </a>
      <a
        href="https://linktr.ee/peachbutterprints"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Linktree} alt="Linktree" />
      </a>
    </div>
  );
};

export default Social;
