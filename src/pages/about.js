import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import ContentWrapper from '../layouts/contentwrapper'

const Footer = styled.footer`
  padding-top: 85%;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  `

const AboutPage = () => (
  <ContentWrapper>
    <h1>About me</h1>

    <div>
      <p>I like to spend a lot of time learning new technologies and <strong>building</strong> new things</p>
      <p>I am also an active runner and cyclist. Follow me on <a target="_blank" href="https://www.strava.com/athletes/22349041"> Strava </a>
         and hit me up if you're in the area. I'm always looking for new training partners.</p>
    </div>

    <Footer>Thanks to Luke Salmon for the bike crank graphic from the Noun Project!</Footer>
  </ContentWrapper>
)

export default AboutPage