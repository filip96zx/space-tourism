import styled from 'styled-components';

const CrewNavigationStyled = styled.ul`
  width: 100vw;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 26px;
  position: absolute;
  z-index: 1;
  top: 315px;

  button {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: none;
    background-color: var(--font-color);
    opacity: 0.17;
    margin: 0 8px;

    &.active{
      transition: 0.15s;
      opacity: 1;
    }
  }

`;

export default CrewNavigationStyled;