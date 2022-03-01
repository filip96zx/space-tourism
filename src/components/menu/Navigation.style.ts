import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

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

  @media ${breakpoints.tablet} {
    position: absolute;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    backdrop-filter: none;
    top: 0;
    right: 0;
    width: auto;
    height: auto;
    padding: 0 35px;
    &.hide {
    transform: translateX(0);
    }

    ol {
      margin-top: 0;
      display: flex;
    }


  }
`;

export default NavigationStyled;