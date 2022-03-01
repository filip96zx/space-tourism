import { createGlobalStyle } from 'styled-components';

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
    //overflow-y: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Bellefair', serif;
    font-weight: 400;
    font-size: 156px;
  }

  h2 {
    font-size: 100px;
  }

  h3 {
    font-size: 56px;
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 4.75px;
  }

`;

export default GlobalStyle;