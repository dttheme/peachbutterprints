import Card from "../components/Card";
import { Contact } from "../components";
import React from "react";

const Commission = () => {
  return (
    <Card>
      <div>
        <h2>Services</h2>
        <ul>
          <li>Illustration for books and games</li>
          <li>Portraiture</li>
          <li>Fan art</li>
          <li>Custom linocuts for events</li>
          <li>Murals</li>
          <li>Miniature painting</li>
        </ul>

        <h2>Commission</h2>
        <a
          href="https://docs.google.com/document/d/1dmfe2BDts62alUpMckay46v029QsjlLJsAFfA7VKP3A/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commission Information
        </a>
        <Contact />
      </div>
    </Card>
  );
};
export default Commission;
