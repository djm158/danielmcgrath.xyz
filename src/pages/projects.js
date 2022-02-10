import Fade from "react-reveal/Fade";
import React from "react";
import crank from "../images/crank.png";
import drone from "../images/drone.png";
import emoji from "../images/dan-emoji.png";
import robot from "../images/robot.png";
import stopwatch from "../images/stopwatch.png";
import calculator from "../images/calculator.png";
import forkmeimg from "../images/forkmegithub.png";
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
  width: 200px;
  transition: box-shadow 0.3s;
  padding-top: 10px;
  position: relative;

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

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  grid-gap: 1rem;
`;

const ForkMeGithub = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 110px;
  width: 110px;
`;

const ProjectCard = ({ icon, githubUrl, title, linkText }) => (
  <Card>
    <CardImg src={icon} />
    <CardContent>
      <span>{title}</span>
      <p>
        <a href={githubUrl}>{linkText}</a>
      </p>
    </CardContent>
    <a href={githubUrl}>
      <ForkMeGithub src={forkmeimg} alt="Fork me on GitHub" />
    </a>
  </Card>
);

const ProjectsPage = () => (
  <ProjectsContainer>
    <Fade right>
      <ProjectCard
        icon={emoji}
        githubUrl="https://github.com/djm158/danielmcgrath.xyz"
        title="danielmcgrath.xyz"
        linkText="This website!"
      />
    </Fade>
    <Fade right>
      <ProjectCard
        icon={calculator}
        githubUrl="https://github.com/djm158/runcalculator"
        title="Run calculator"
        linkText="A calculator for determining pace, time, and distance"
      />
    </Fade>
    <Fade right delay={100}>
      <ProjectCard
        icon={drone}
        githubUrl="https://github.com/djm158/ECE1160_Final_Project"
        title="Gesture Controlled Quadcopter"
        linkText="Fly like Iron Man"
      />
    </Fade>
    <Fade right delay={200}>
      <ProjectCard
        icon={crank}
        githubUrl="https://github.com/djm158/PedalPower_Embedded"
        title="Pedal Power"
        linkText="DIY Power Meter"
      />
    </Fade>
    <Fade right delay={300}>
      <ProjectCard
        icon={robot}
        githubUrl="https://github.com/djm158/help-wanted-bot"
        title="Help wanted bot"
        linkText="Find issues that need help!"
      />
    </Fade>
    <Fade right delay={400}>
      <ProjectCard
        icon={stopwatch}
        githubUrl="https://github.com/djm158/pomo"
        title="Pomo Dojo"
        linkText="Pomodoro Timer"
      />
    </Fade>
  </ProjectsContainer>
);

export default ProjectsPage;
