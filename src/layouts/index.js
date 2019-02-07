import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import icon from '../images/dan-emoji.png'

import SideBar from './sidebar'

import Menu from '../components/menu'
import favicon from '../images/favicon.ico'

require("prismjs/themes/prism-twilight.css");

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100%;
    height: 100%;
    width: 100%;
`

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Main = styled.div`
    background: white;
    @media(min-width: 768px) {
      margin-left: 33%;
    }
    @media(min-width: 1024px) {
      margin-left: 280px;
    }

`
const MainContent = styled.main`
  min-height: 642px;
  padding: calc(48px + 32 * (100vw - 320px) / 1120);
  @media screen and (min-width: 320px){
    min-height: auto;
  }

  @media (min-width: 768px) {
    display: flex;
    height: 100vh;
  }
  > div {
    width: 100%;
  }
}
`
const TemplateWrapper = ({ children }) => (
  <div>
  <Menu/>
  <PageWrapper>
    <Helmet
      title="Daniel McGrath | Portfolio"
      meta={[
        { name: 'description', content: 'I am a full stack developer specializing in React and Node/Express. Located in Philadelphia.' },
        { property: 'og:title', content: 'Dan McGrath' },
        { favicon: favicon }
      ]}
      link={ [{rel: "shortcut icon", type: "image/x-icon", href: icon}] }
    />
    <SideBar />
    <MainWrapper>
      <Main>
        <MainContent>
          {children()}
        </MainContent>
      </Main>
    </MainWrapper>
  </PageWrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
