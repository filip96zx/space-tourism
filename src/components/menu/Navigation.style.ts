import styled from 'styled-components';

const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  padding-left: 32px;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(31px);
  transition: .3s;
  z-index: 2;
  &.hide {
    transform: translateX(100%);
  }
  
  ol {
    list-style: none;
    counter-reset: counter -1;
    margin-top: 15vh;
  }

`;

export default NavigationStyled;