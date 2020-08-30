import Logo from "./logo";
import { NavList } from "./NavList";
import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const FixedSideBar = styled.header`
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

const SideBar = () => (
  <FixedSideBar>
    <Flex alignItems="center" flexDirection="column">
      <div data-sal="fade" data-sal-easing="ease" data-sal-duration="400">
        <Logo />
      </div>
      <NavList />
    </Flex>
  </FixedSideBar>
);

export default SideBar;
