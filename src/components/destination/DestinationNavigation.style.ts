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
`;

export default DestinationNavigationStyled;