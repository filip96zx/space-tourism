import styled from 'styled-components';

const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  padding-left: 32px;

  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  transition: .3s;
  &.hide {
    opacity: 0;
  }

  &.show {
    opacity: 1;           
  }
  
  ol {
    list-style: none;
    counter-reset: counter -1;
    margin-top: 15vh;
  }

  ol li {
    counter-increment: counter;
    margin-bottom: 32px;
  }

  a {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16x;
    letter-spacing: 2.7px;
    color: var(--font-color);
    text-decoration: none;
    font-weight: 200;
    text-transform: uppercase;
    :before {
      content: "0" counter(counter);
      font-weight: 700;
      margin-right: 14px;
      letter-spacing: 2.7px;
    }
  }

`;

export default NavigationStyled;