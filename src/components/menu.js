import React from 'react'
import Link from 'gatsby-link'
import icon from '../images/dan-emoji.png'
import styled from 'styled-components'
import Logo from '../components/logo'

const Overlay = styled.div`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.open ? 1 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;
  padding-top: 60px;
`

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
`

const StyledWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const SideNav = styled.nav`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
 }
`

const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
`
const SideLink = styled(Link) `
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
`

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isToggle: !prevState.isToggle }));
  }

  render() {
      return (

        <StyledWrapper>
          <Header>
            <div><a onClick={this.handleClick}>Menu</a></div>
            <div><Logo /></div>
            <div>|||</div>

          </Header>
          <Overlay open={this.state.isToggle}>
            <SideNav>
              <LinkList>
                <li><SideLink onClick={this.handleClick} to="/">Home</SideLink></li>
                <li><SideLink onClick={this.handleClick} to="/projects">Projects</SideLink></li>
                <li><SideLink onClick={this.handleClick} to="/blog/">Blog</SideLink></li>
                <li><SideLink onClick={this.handleClick} to="/about">About</SideLink></li>
              </LinkList>
            </SideNav>
          </Overlay>
        </StyledWrapper>
      )

  }
}

export default Menu