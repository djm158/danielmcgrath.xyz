import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import emoji from '../images/dan-emoji.png'
import drone from '../images/drone.png'

const ResponsiveImage = styled.img`
  position: relative;
  float: left;
  width:  200px;
  height: 200px;
  margin: 10px 20px;
`

const Card = styled.div`
/* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px; /*, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px*/
  max-height: 360px;
  display: flex;
  flex-direction: column;
  float: left;
  text-align: center;
  margin 0 20px;
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
`

const ProjectsPage = () => (
  <div>
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
        <p><a href="https://github.com/dgtc1012/ECE1160_Final_Project">See Github</a></p>
      </CardContent>
    </Card>
  </div>
)

export default ProjectsPage