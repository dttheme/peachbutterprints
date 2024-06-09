import Card from "../components/Card";
import { Contact } from "../components";
import React from "react";

const Commission = () => {
  return (
    <Card>
      <div>
        <h2>Commission</h2>
        <a
          href="https://docs.google.com/document/d/1dmfe2BDts62alUpMckay46v029QsjlLJsAFfA7VKP3A/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commission Information
        </a>
        <p>
          I've recently opened up for commission and I'm still working out all
          the kinks. Don't hesitate to reach out if you have questions!{" "}
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
