import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';
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

  @media ${breakpoints.tablet} {
    top: calc(310px + 220px);
  }
  @media ${breakpoints.desktop} { 
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: max(165px, 11%);
    flex-direction: column;
    width: auto;
    gap: 32px;
    button {
      width: 80px;
      height: 80px;
      font-size: 32px;
      line-height: 37px;
      text-align: center;
      letter-spacing: 2px;
      :hover {
        border: 1px solid var(--font-color);
      }
      &.active {
      color: black;
      background-color: white;
    }
    }
  }
`;

export default TechnologyNavigationStyled;