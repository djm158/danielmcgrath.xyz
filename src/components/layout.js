import { StaticQuery, graphql } from "gatsby";

import Menu from "./menu";
import PropTypes from "prop-types";
import React from "react";
import SideBar from "./sidebar";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "../theme";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  height: 100%;
  width: 100%;
`;

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  background: white;
  @media (min-width: 768px) {
    margin-left: 33%;
  }
  @media (min-width: 1024px) {
    margin-left: 280px;
  }
`;

const MainContent = styled.div`
  min-height: 642px;
  padding: calc(48px + 32 * (100vw - 320px) / 1120);
  @media screen and (min-width: 320px) {
    min-height: auto;
  }

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Menu />
        <ThemeProvider theme={theme}>
          <PageWrapper>
            <SideBar />
            <MainWrapper>
              <Main>
                <MainContent>{children}</MainContent>
              </Main>
            </MainWrapper>
          </PageWrapper>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
