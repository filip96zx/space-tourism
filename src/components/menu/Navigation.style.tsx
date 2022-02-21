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

`;

export default NavigationStyled;