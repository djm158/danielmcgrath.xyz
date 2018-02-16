import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  @media(min-width: 1024px) {
    width: 80%;
    max-width: 630px;
  }
`
export default ({ children }) =>
  <ContentWrapper>
    {children}
  </ContentWrapper>