import ContentWrapper from "../layouts/contentwrapper";
import Fade from "react-reveal/Fade";
import React from "react";

const IndexPage = () => (
  <ContentWrapper>
    <Fade delay={100}>
      <h1>Hello!</h1>
      <p>I'm Dan.</p>
      <p>
        I'm a full stack developer at{" "}
        <a href="https://www.vistarmedia.com/">Vistar Media</a> based in
        Philadelphia.
      </p>
      <p>
        I have a diverse background ranging from embedded systems to front end
        development.
      </p>
      <p>I enjoy working with React, Typescript, and NodeJS.</p>
      <p>
        Checkout my{" "}
        <a target="_blank" href="https://github.com/djm158">
          GitHub
        </a>{" "}
        for some of my work!
      </p>
    </Fade>
  </ContentWrapper>
);

export default IndexPage;
