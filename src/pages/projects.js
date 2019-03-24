import Fade from "react-reveal/Fade";
import React from "react";
import crank from "../images/crank.png";
import drone from "../images/drone.png";
import emoji from "../images/dan-emoji.png";
import robot from "../images/robot.png";
import styled from "styled-components";

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
  transition: box-shadow 0.3s;
  padding-top: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(33, 33, 33, 0.6);
    transform: translateY(-3px);
  }
`;

const CardImg = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
  background-image: url(${props => props.src});
`;

const CardContent = styled.div`
  width: 200px;
  padding-top: 10px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 567px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectsPage = () => (
  <FlexWrapper>
    <Fade right>
      <Card>
        <CardImg src={emoji} />
        <CardContent>
          <span>danielmcgrath.xyz</span>
          <p>
            <a href="https://github.com/djm158/danielmcgrath.xyz">
              This website!
            </a>
          </p>
        </CardContent>
      </Card>
    </Fade>

    <Fade right delay={100}>
      <Card>
        <CardImg src={drone} />
        <CardContent>
          <span>Gesture Controlled Quadcopter</span>
          <p>
            <a href="https://github.com/dgtc1012/ECE1160_Final_Project">
              Fly like Iron Man
            </a>
          </p>
        </CardContent>
      </Card>
    </Fade>

    <Fade right delay={200}>
      <Card>
        <CardImg src={crank} />
        <CardContent>
          <span>Pedal Power</span>
          <p>
            <a href="https://github.com/djm158/PedalPower_Embedded">
              DIY Power Meter
            </a>
          </p>
        </CardContent>
      </Card>
    </Fade>
    <Fade right delay={300}>
      <Card>
        <CardImg src={robot} />
        <CardContent>
          <span>Help wanted bot</span>
          <p>
            <a href="https://github.com/djm158/help-wanted-bot">
              Find issues that need help!
            </a>
          </p>
        </CardContent>
      </Card>
    </Fade>
  </FlexWrapper>
);

export default ProjectsPage;
