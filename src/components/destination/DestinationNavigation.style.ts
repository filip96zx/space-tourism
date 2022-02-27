import styled from 'styled-components';
import PageNavigationBase from '../displayElements/PageNavigationBase.style';

const DestinationNavigationStyled = styled(PageNavigationBase)`

  button {
    background-color: transparent;
    color: var(--font-color);
    margin: 0 13px;
    width: auto;
    height: auto;
    letter-spacing: 2.36px;
    font-family: "Barlow Condensed", sans-serif;
    padding-bottom: 7px;
    line-height: 17px;
    font-size: 14px;
    opacity: 1;
    text-transform: uppercase;
    border-radius: 0;
    &.active{
      border-bottom: 3px solid var(--font-color);
    }
  }
  @media (min-width: 768px) {
    //top: calc(155px + 0.39 * 100vw);
    top: min(calc(155px + 0.39 * 100vw), calc(155px + 0.39 * 100vh));

    button {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
  }
`;

export default DestinationNavigationStyled;