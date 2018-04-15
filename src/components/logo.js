import React from 'react'
import styled from 'styled-components'

import logo from '../images/danemojimedium.png'

const Logo = styled.div`
  @media (max-width: 767px) {
    height: 40px;
    width: 30px;
  }
`

const ImgResponsive = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
`

export default () => 
  <Logo>
    <ImgResponsive src={logo} alt="Logo" />
  </Logo>