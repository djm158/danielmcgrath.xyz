import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import ContentWrapper from '../layouts/contentwrapper'

const IndexPage = () => (
    <ContentWrapper>
      <h1>Hello!</h1>
      <p>I'm Dan.</p>
      <p>
        I'm currently a senior studying computer engineering at the University of
      Pittsburgh. I'll be graduating in December and looking for full time
      employment in the Philadelphia area.
    </p>
      <p>
        I have a diverse background ranging from embedded systems to front end
      development.
    </p>
      <p>
        Checkout my <a target="_blank" href="https://github.com/djm158">GitHub</a> for some of my
      work!
    </p>
      {/* <p>This site is under construction, check back soon!</p> */}
      <a href="https://docs.google.com/presentation/d/e/2PACX-1vS5kurHDBGOWYU45laldQYm8-GQex8vNywHCPd6CVSmCqjM1bYv8i3Y4cmD0W48VhlscaKjQlhsXaWe/pub?start=false&loop=false&delayms=3000">
      <p>PILI SLIDES</p>
    </a>
    </ContentWrapper>
)

export default IndexPage
