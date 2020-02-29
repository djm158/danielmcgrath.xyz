import React, { useState } from "react";
import { navigateTo } from "gatsby-link";
import styled from "styled-components";
import { Button } from "rebass";

// TODO: component
const SubmitButton = styled(Button)`
  cursor: pointer;
  background: #7c3319;
`;

// TODO: component
const Input = styled.input`
  width: 400px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

// TODO: component
const TextArea = styled.textarea`
  width: 400px;
  height: 280px;
  @media (max-width: 480px) {
    width: 100%;
    height: 80px;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => navigateTo("/thanks"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Your name:
            <br />
            <Input
              type="text"
              name="name"
              onChange={e => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your email:
            <br />
            <Input
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:
            <br />
            <TextArea
              name="message"
              onChange={e => setMessage(e.target.value)}
            />
          </label>
        </p>
        <p>
          <SubmitButton type="submit">Send</SubmitButton>
        </p>
      </form>
    </>
  );
};

export default Contact;
