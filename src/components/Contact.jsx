import React, { useState } from "react";
import "../index.css";

import { postContact, sendEmail } from "../firestore";

export default () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [message, updateMessage] = useState("");
  const [submitted, updateSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    postContact({ name, email, message })
      .then((resp) => {
        return sendEmail({ name, email, message });
      })
      .then(() => {
        console.log("Queued email for delivery!");
        updateSubmitted(true);
      });
  };

  if (!submitted) {
    return (
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <h2>
            <b>Contact</b>
          </h2>
          <div>
            Please reach out using the form below, or directly at{" "}
            <a href="mailto:peachbutterprints@gmail.com">
              peachbutterprints@gmail.com
            </a>
            .
          </div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
            required
          />
          <label htmlFor="">Message</label>
          <textarea
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => updateMessage(e.target.value)}
            required
          ></textarea>
          <button type="sumbit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p>Form submitted!</p>
      </div>
    );
  }
};
