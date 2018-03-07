import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import ContentWrapper from '../layouts/contentwrapper'
require("prismjs/themes/prism-twilight.css");

const IndexPage = () => (
    <ContentWrapper>
      <h1>Hello!</h1>
      <p>I'm Dan.</p>
      <p>
        I'm a full stack developer at <a href="https://www.ceiamerica.com/">CEI</a> based in Philadelphia.
    </p>
      <p>
        I have a diverse background ranging from embedded systems to front end
      development.
    </p>
      <p>
        Checkout my <a target="_blank" href="https://github.com/djm158">GitHub</a> for some of my
      work!
    </p>
    </ContentWrapper>
)

export default IndexPage
