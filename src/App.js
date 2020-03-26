import React, { Component } from 'react';
import styled from 'styled-components'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './assets/sketchbook/background';
import GetPartnerResume from './components/pages/GetPartnerResume'

const theme = {
  colors: {
    dark: '#04090d',
    light: '#f8f8f8',
    primary: '#1ac69e'
  },
  fonts: {
    display: "'Saira', sans-serif",
    text: "'Work Sans', sans-serif"
  },
  pageWidth: {
    xl: 1200,
    l: 992,
    m: 768,
    s: 576
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  @media (min-width: ${theme.pageWidth.s}px) {
    max-width: ${theme.pageWidth.s}px;
  }
  @media (min-width: ${theme.pageWidth.m}px) {
    max-width: ${theme.pageWidth.m}px;
  }
  @media (min-width: ${theme.pageWidth.l}px) {
    max-width: ${theme.pageWidth.l}px;
  }
  @media (min-width: ${theme.pageWidth.xl}px) {
    max-width: ${theme.pageWidth.xl}px;
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: -1;
`

class App extends Component {

  handleScroll = (e) => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    document.body.style.backgroundPosition = `center, center ${-400 + scrollTop/8}px`
  }

  render() {
    return (
      <div className="App">
        <Container>
            <GetPartnerResume></GetPartnerResume>
        </Container>
        <BackgroundContainer>
            <P5Wrapper sketch={sketch}></P5Wrapper>
        </BackgroundContainer>
      </div>
    );
  }
}


export default App;
