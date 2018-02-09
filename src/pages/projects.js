import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import emoji from '../images/dan-emoji.png'

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
  &hover: {
    background: red;
  }
`

const CardImg = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width:  200px;
  height: 200px;
  /* get background from props */
  background-image: url(${props => props.src});
  /* background: url('../images/dan-emoji.png'); */
`

const CardContent = styled.div`
`

const ProjectsPage = () => (
  <div>
    <Card>
      <CardImg src={emoji}></CardImg>
      <CardImg></CardImg>
      <CardContent>
        <span>card title</span>
        <p>card text blah blah blah</p>
      </CardContent>

    </Card>
  </div>
)

export default ProjectsPage