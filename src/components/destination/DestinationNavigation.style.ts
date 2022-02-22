import styled from 'styled-components';

const DestinationNavigationStyled = styled.ul`

  width: 100vw;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 26px;

  button {
    background-color: transparent;
    color: var(--font-color);
    border: none;
    margin: 0 13px;
    font-size: 14px;
    letter-spacing: 2.36px;
    padding-bottom: 7px;
    line-height: 17px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    text-transform: uppercase;
    &.active{
      border-bottom: 3px solid var(--font-color);
    }

    /* :hover {
      border-bottom: 3px solid rgba(255, 255, 255, 0.5)
    } */
  }
`;

export default DestinationNavigationStyled;