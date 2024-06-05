import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./index.css";
import "./components";
import { Header, Card, Contact, Social } from "./components";
import { Home, About, Commission } from "./pages";

const year = new Date().getFullYear();

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
      <Social></Social>

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
