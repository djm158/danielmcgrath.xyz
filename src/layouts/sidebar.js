import React from "react";
import Link from "gatsby-link";
import icon from "../images/dan-emoji.png";
import styled from "styled-components";
import Logo from "../components/logo";
import resume from "../files/danmcgrathresume.pdf";

const SideBarWrapper = styled.header`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: calc(24px + 16 * (100vw - 320px) / 1120);
  background: #d3d3d3;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 33%;
  }
  @media (min-width: 1024px) {
    width: 280px;
  }
`;

const SideNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
`;
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

const SideBar = () => (
  <SideBarWrapper>
    <Logo />
    <SideNav>
      <LinkList>
        <li>
          <SideLink to="/">Home</SideLink>
        </li>
        <li>
          <SideLink to="/projects">Projects</SideLink>
        </li>
        <li>
          <SideLink to="/blog/">Blog</SideLink>
        </li>
        <li>
          <SideLink to="/about">About</SideLink>
        </li>
        <li>
          <SideLink to="/contact">Contact</SideLink>
        </li>
        <li>
          <SideAnchor href={resume}>Resume</SideAnchor>
        </li>
      </LinkList>
    </SideNav>
  </SideBarWrapper>
);

export default SideBar;
