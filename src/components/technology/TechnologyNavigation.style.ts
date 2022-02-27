import styled from 'styled-components';
import PageNavigationBase from '../displayElements/PageNavigationBase.style';

const TechnologyNavigationStyled = styled(PageNavigationBase)`
  button {
    width: 40px;
    height: 40px;
    opacity: 1;
    background-color: transparent;
    border: 1px solid rgba(255,255,255,0.25);
    font-family: "Bellefair";
    font-size: 16px;
    color: var(--font-color);
    &.active {
      color: black;
      background-color: white;
    }
  }
`;

export default TechnologyNavigationStyled;