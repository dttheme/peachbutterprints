import React from "react";

import Card from "../components/Card";
import { Contact } from "../components";

const Commission = () => {
  return (
    <Card>
      <div>
        <h2>Commission</h2>
        <p>
          I've very recently opened up for commission and I'm still working out
          all the kinks. My first draft is available here but note that it is
          still a work in progres:{" "}
          <a
            href="https://docs.google.com/document/d/1dmfe2BDts62alUpMckay46v029QsjlLJsAFfA7VKP3A/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commission Information
          </a>
        </p>
        <p>
          I'm open to all kinds of different work but I am most interested in
          working on:
          <ul>
            <li>Illustration for books and games</li>
            <li>Portraiture</li>
            <li>Fan art</li>
            <li>Custom linocuts for events</li>
            <li>Murals</li>
          </ul>
        </p>
        <Contact />
      </div>
    </Card>
  );
};
export default Commission;
