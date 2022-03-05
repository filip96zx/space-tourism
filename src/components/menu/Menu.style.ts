import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const MenuStyled = styled.header`
  position: absolute;
  width: 100%;
  
  .icons-container {
    position: relative;
    width: calc(100vw - 2 * 24px);
    height: 40px;
    margin: 24px 24px 0 24px;
  }

  .logo {
    cursor: pointer;
    position: absolute;
    width: 40px;
    height: 40px;
    z-index: 3;
  }

  .menu-icon {
    position: absolute;
    top: 50%;
    right: 0%;
    width: 24px;
    transform: translateY(-50%);
    float: right;
    z-index: 3;
    background: none;
    border: none;
  }

  @media ${breakpoints.tablet} {
    .menu-icon{
      display: none;
    }
    .logo {
      width: 48px;
      height: 48px;
    }
  }

  @media ${breakpoints.desktop} {
    margin-top: 40px;
    position: fixed;
    
    .logo{
      margin-left: 31px;
    }

  }
`;

export default MenuStyled;