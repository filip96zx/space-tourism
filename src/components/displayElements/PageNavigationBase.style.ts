import styled from 'styled-components';

const PageNavigationBase = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 26px;
  position: absolute;
  z-index: 1;
  top: 315px;

  button {
    background-color: var(--font-color);
    margin: 0 8px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: none;
    opacity: 0.17;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    &.active{
      transition: 0.15s;
      opacity: 1;
    }
  }
`;

export default PageNavigationBase;