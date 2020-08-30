import { Link, StaticQuery, graphql } from "gatsby";

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
        <div
          data-sal="slide-right"
          data-sal-delay="0"
          data-sal-easing="ease"
          data-sal-duration="400"
        >
          <li>
            <SideLink to="/">Home</SideLink>
          </li>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="400"
        >
          <li>
            <SideLink to="/projects">Projects</SideLink>
          </li>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="400"
        >
          <li>
            <SideLink to="/blog/">Blog</SideLink>
          </li>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="400"
        >
          <li>
            <SideLink to="/about">About</SideLink>
          </li>
        </div>
        <div
                  data-sal="slide-right"
                  data-sal-delay="400"
                  data-sal-easing="ease"
                  data-sal-duration="400"
        >
          <li>
            <SideLink to="/contact">Contact</SideLink>
          </li>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="500"
          data-sal-easing="ease"
          data-sal-duration="400"
        >
          <li>
            <SideLink
              as="a"
              href={data && data.file ? data.file.publicURL : ""}
            >
              Resume
            </SideLink>
          </li>
        </div>
      </LinkList>
    )}
  />
);
