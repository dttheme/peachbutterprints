import "./index.css";
import "./components";

import { About, Commission, Home } from "./pages";
import { Footer, Header, Social } from "./components";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import KofiButton from "kofi-button";
import React from "react";

const year = new Date().getFullYear();

const StyledKofiButton = () => {
  return (
    <KofiButton
      color="#A68E87"
      title="Buy me a cup of coffee?"
      kofiID="R6R4U053I"
    />
  );
};

export default () => (
  <div className="app-wrapper">
    <div className="content">
      <Router>
        <Header>
          <Link to="/">
            <h1>Peach Butter Prints</h1>
          </Link>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/commission">Commission</Link>
                </li>
                <li>
                  <a
                    href="https://peachbutterprints.myshopify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/commission" element={<Commission />}></Route>
        </Routes>
      </Router>
      <Footer>
        <Social></Social>
        <div className="kofi-wrapper">
          <StyledKofiButton />
        </div>
      </Footer>

      <p className="credit">
        © {year},
        <a
          href="https://dyannaturner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dyanna Turner
        </a>
        ,
      </p>
    </div>
  </div>
);
