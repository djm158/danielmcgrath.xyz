import React, { useState } from "react";

import Logo from "../components/logo";
import { NavList } from "./NavList";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  padding-top: 60px;
  z-index: 10;
`;

const Header = styled.header`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
  height: 60px;
  background: white;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const SideNav = styled.nav`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.div`
  cursor: pointer;
  /* TODO: theme this OSLT */
  color: #7b3218;
`;

export const Menu = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <StyledWrapper>
      <Header>
        <MenuButton onClick={handleClick}>Menu</MenuButton>
        <Logo />
        {/* TODO: fix this */}
        <div>&nbsp; &nbsp; &nbsp; &nbsp;</div>
      </Header>
      <Overlay open={isToggle}>
        <SideNav>
          <NavList />
        </SideNav>
      </Overlay>
    </StyledWrapper>
  );
};

export default Menu;
