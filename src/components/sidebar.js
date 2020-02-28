import Fade from "react-reveal/Fade";
import Logo from "./logo";
import { NavList } from "./NavList";
import React from "react";
import styled from "styled-components";

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
    width: 240px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`;

const SideNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const SideBar = () => (
  <SideBarWrapper>
    <Fade delay={100}>
      <Logo />
    </Fade>
    <SideNav>
      <NavList />
    </SideNav>
  </SideBarWrapper>
);

export default SideBar;
