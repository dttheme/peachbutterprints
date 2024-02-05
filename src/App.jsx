import React from "react";
import "./index.css";
import "./components";
import { Header, Card, Contact } from "./components";
import Instagram from "../svg/logo-instagram.svg";
import Tiktok from "../svg/logo-tiktok.svg";
import Tumblr from "../svg/logo-tumblr.svg";
import faceGif from "./img/face.gif";

const year = new Date().getFullYear();

export default () => (
  <div className="app-wrapper">
    <div className="content">
      <Header>
        <h1>Peach Butter Prints</h1>
      </Header>
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
      <Card>
        <h2>
          <b>About</b>
        </h2>
        <div className="about-grid">
          <img
            src={faceGif}
            alt="an animated gif of different emotive smiley faces"
          />
          <div>
            <p>Artist and software engineer living in Atlanta.</p>
            <p>
              Open for commission!{" "}
              <a
                href="https://docs.google.com/document/d/1dmfe2BDts62alUpMckay46v029QsjlLJsAFfA7VKP3A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission Information
              </a>
            </p>

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
            <script
              type="text/javascript"
              src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"
            ></script>
            <script type="text/javascript">
              kofiwidget2.init('Support Me on Ko-fi', 'A68E87',
              'R6R4U053I');kofiwidget2.draw();
            </script>
          </div>
        </div>
      </Card>
      <Card>
        <Contact></Contact>
      </Card>
      <p className="credit">
        @
        <a
          href="https://dyannaturner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dyanna Turner
        </a>
        , {year}
      </p>
    </div>
  </div>
);
