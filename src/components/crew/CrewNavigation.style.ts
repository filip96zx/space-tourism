import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';
import PageNavigationBase from '../displayElements/PageNavigationBase.style';

const CrewNavigationStyled = styled(PageNavigationBase)`

  @media ${breakpoints.tablet} {
    top: 430px;
  }
  @media ${breakpoints.desktop} {
    width:auto;
    left: max(165px, 11%);
    top: auto;
    bottom: min(calc(25vh - 120px), calc(230px - 120px));
    gap: 24px;
    button {
      margin: 0;
      height: 15px;
      width: 15px;
      :hover {
        background-color: var(--font-color);
        opacity: 0.5;
      }
      &.active{
        transition: 0.15s;
        opacity: 1;
      }
    }
  }
`;

export default CrewNavigationStyled;