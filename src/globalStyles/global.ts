import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');


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
  background-color: black;
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

.subheading-1 {
  font-family: 'Bellefair', serif;
  font-size: 28px;
}

.subheading-2 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.35px;
}

nav {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16x;
  letter-spacing: 2.7px;
}

`;

export default GlobalStyle;