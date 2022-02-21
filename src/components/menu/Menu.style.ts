import styled from 'styled-components';

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
    width: 40px;
    height: 40px;
  }

  .menu-icon {
    position: absolute;
    top: 50%;
    right: 0%;
    width: 24px;
    transform: translateY(-50%);
    float: right;
    z-index: 1;
    background: none;
    border: none;
  }
`;

export default MenuStyled;