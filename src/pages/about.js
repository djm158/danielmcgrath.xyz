import React from "react";
import styled from "styled-components";

import ContentWrapper from "../layouts/contentwrapper";

const IconLink = styled.a`
  > svg {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }

  > svg:hover {
    fill: #6e2c19;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    fill: #6e2c19;
  }
`;

const AboutPage = () => (
  <ContentWrapper>
    <h1>About me</h1>

    <div>
      <p>
        I like to spend a lot of time learning new technologies and{" "}
        <strong>building</strong> new things. When I'm not writing code or
        reading tech articles, I like to play guitar and listen to new podcasts
        and music.
      </p>
      <p>
        I am also an active runner and cyclist. Follow me on{" "}
        <a target="_blank" href="https://www.strava.com/athletes/22349041">
          {" "}
          Strava{" "}
        </a>
        and let me know if you're in the Philly area! I know plenty of good
        routes to run/ride 🚲 🎽.
      </p>
    </div>

    <IconLink href="https://codepen.io/djm158">
      <svg
        aria-labelledby="simpleicons-codepen-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="simpleicons-codepen-icon">CodePen icon</title>
        <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z" />
      </svg>
    </IconLink>

    <IconLink href="https://github.com/djm158/">
      <svg
        aria-labelledby="simpleicons-github-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="simpleicons-github-icon">GitHub icon</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </IconLink>

    <IconLink href="https://twitter.com/runDMCgrath">
      <svg
        aria-labelledby="simpleicons-twitter-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="simpleicons-twitter-icon">Twitter icon</title>
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </svg>
    </IconLink>

    <IconLink href="https://open.spotify.com/user/1259387739?si=LxH6YjfNTfmcrSNxOHph1Q">
      <svg
        aria-labelledby="simpleicons-spotify-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="simpleicons-spotify-icon">Spotify icon</title>
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    </IconLink>

    <IconLink href="https://www.strava.com/athletes/22349041">
      <svg
        aria-labelledby="simpleicons-strava-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="simpleicons-strava-icon">Strava icon</title>
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    </IconLink>
  </ContentWrapper>
);

export default AboutPage;
