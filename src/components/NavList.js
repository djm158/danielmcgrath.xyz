import { Link, StaticQuery, graphql } from "gatsby";

import Fade from "react-reveal/Fade";
import React from "react";
import styled from "styled-components";

const SideLink = styled(Link)`
  line-height: 2rem;
  text-decoration: none;
  position: relative;
  color: #000;
  font-size: 24px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
    -webkit-transform: scaleX(1);
  }
`;

// TODO: this should resuse SideLink styles somehow
const SideAnchor = styled.a`
  line-height: 2rem;
  text-decoration: none;
  position: relative;
  color: #000;
  font-size: 24px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
    -webkit-transform: scaleX(1);
  }
`;

const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
`;

export const NavList = () => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { eq: "danmcgrathresume" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <LinkList>
        <Fade left>
          <li>
            <SideLink to="/">Home</SideLink>
          </li>
        </Fade>
        <Fade left>
          <li>
            <SideLink to="/projects">Projects</SideLink>
          </li>
        </Fade>
        <Fade left delay={100}>
          <li>
            <SideLink to="/blog/">Blog</SideLink>
          </li>
        </Fade>
        <Fade left delay={200}>
          <li>
            <SideLink to="/about">About</SideLink>
          </li>
        </Fade>
        <Fade left delay={300}>
          <li>
            <SideLink to="/contact">Contact</SideLink>
          </li>
        </Fade>
        <Fade left delay={400}>
          <li>
            <SideAnchor href={data && data.file ? data.file.publicURL : ""}>Resume</SideAnchor>
          </li>
        </Fade>
      </LinkList>
    )}
  />
);
