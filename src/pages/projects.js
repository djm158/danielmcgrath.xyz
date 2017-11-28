import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import ContentWrapper from '../layouts/contentwrapper'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
`

const ResponsiveImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0;
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Cell = styled.div`
  margin: 0.5rem;
  width: 20%;
  height: 6rem;

  ${'' /* > img {
    height: 6rem;
    width: 6rem;
  } */}
`

const ProjectsPage = () => (
  <Container>
    <h1>Projects</h1>
    <Grid>
      <Cell>
        <ResponsiveImg src="drone.png" alt="drone image" />
      </Cell>
      <Cell>
        <ResponsiveImg src="list.png" alt="drone image" />
      </Cell>
      <Cell>
        <ResponsiveImg src="dan-emoji.png" alt="drone image" />
      </Cell>
    </Grid>
  </Container>
)

export default ProjectsPage