import React from "react";
import "./index.css";
import "./components";
import { Header, Card, Contact } from "./components";
import Instagram from "../svg/logo-instagram.svg";
import Tiktok from "../svg/logo-tiktok.svg";
import Tumblr from "../svg/logo-tumblr.svg";

export default () => (
  <div className="app-wrapper">
    <Header>
      <h1>Peach Butter Prints</h1>
    </Header>
    <Card>
      <h2>
        <b>About</b>
      </h2>
      <p>Artist and software engineer living in Atlanta</p>
      <p>
        <a href="https://docs.google.com/document/d/1dmfe2BDts62alUpMckay46v029QsjlLJsAFfA7VKP3A/edit">
          Commission Information
        </a>
      </p>
      <p></p>
    </Card>
    <Card>
      <Contact></Contact>
    </Card>
    <Card>
      <h2>
        <b>Socials</b>
      </h2>
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
  </div>
);
