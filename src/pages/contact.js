import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'

const SubmitButton = styled.button`
  cursor: pointer;
`

const Input = styled.input`
  width: 400px;
  @media(max-width: 480px) {
    width: 100%;
  }
`
const TextArea = styled.textarea`
  width: 400px;
  height: 280px;
  @media(max-width: 480px) {
    width: 100%;
    height: 80px;
  }
`

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo('/thanks'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
            <Input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <Input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <TextArea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <SubmitButton type="submit">Send</SubmitButton>
          </p>
        </form>
      </div>
    );
  }
}