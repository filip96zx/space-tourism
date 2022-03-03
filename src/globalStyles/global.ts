import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;  
    padding: 0;
  }

  html {
    --main-color: rgb(11,13,23);
    --secondary-color: rgb(208,214,249);
    --font-color: rgb(255,255,255);
  }

  body {
    font-family: 'Barlow', sans-serif;
    color: var(--font-color);
    background-color: var(--main-color);
    @media ${breakpoints.desktop} {
    overflow: hidden;
    }
  }

  h1, h2, h3, h4 {
    font-family: 'Bellefair', serif;
    font-weight: 400;
  }


  h5 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 4.75px;
  }

`;

export default GlobalStyle;