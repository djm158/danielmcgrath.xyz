import React from 'react'
import styled from 'styled-components'

import logo from '../images/danemojimedium.png'

const Logo = styled.div`
  @media (max-width: 767px) {
    height: 30px;
    width: 30px;
  }
`

export default () => 
  <Logo>
    <img src={logo} alt="Logo" />
  </Logo>