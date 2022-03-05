import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  padding-left: 32px;
  background-color: rgba(0, 0, 0, 0.88);
  @supports ((-webkit-backdrop-filter: blur(31px)) or (backdrop-filter: blur(31px))) {
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(31px);
  }

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
    background: blur(30px);
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
  @media ${breakpoints.desktop} {
    background-color: rgba(125, 125, 125, 0.18              );
    padding-right: max(165px, 11%);
    padding-left: 100px;
  }
`;

export default NavigationStyled;