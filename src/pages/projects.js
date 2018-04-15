import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import emoji from '../images/dan-emoji.png'
import drone from '../images/drone.png'
import crank from '../images/crank.png'
import ContentWrapper from '../layouts/contentwrapper'

const Card = styled.div`
/* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px; /*, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px*/
  height: 320px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  float: left;
  text-align: center;
  margin: 20px;
  width: 200px;
  transition: box-shadow .3s;
  padding-top: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(33,33,33,.6); 
  }
`

const CardImg = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width:  200px;
  height: 200px;
  background-image: url(${props => props.src});
`

const CardContent = styled.div`
  width: 200px;
  padding-top: 10px;
`

const FlexWraper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 567px) {
    flex-flow: column;
  }
`

const ProjectsPage = () => (
  <ContentWrapper>
    <FlexWraper>

      <Card>
        <CardImg src={emoji}></CardImg>
        <CardContent>
          <span>danielmcgrath.xyz</span>
          <p><a href="https://github.com/djm158/danielmcgrath.xyz">This website!</a></p>
        </CardContent>
      </Card>

      <Card>
        <CardImg src={drone}></CardImg>
        <CardContent>
          <span>gesture controlled quadcopter</span>
          <p><a href="https://github.com/dgtc1012/ECE1160_Final_Project">Fly like Iron Man</a></p>
        </CardContent>
      </Card>

      <Card>
        <CardImg src={crank}></CardImg>
        <CardContent>
          <span>Pedal Power</span>
          <p><a href="https://github.com/djm158/PedalPower_Embedded">DIY Power Meter</a></p>
        </CardContent>
      </Card>

    </FlexWraper>
  </ContentWrapper>
)

export default ProjectsPage