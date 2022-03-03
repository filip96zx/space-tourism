import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const ExploreButtonsStyled = styled.button`
  display: block;
  text-transform: uppercase;
  font-family: 'Bellefair', serif;
  line-height: 23px;
  font-size: 20px;
  letter-spacing: 1.25px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--font-color);
  border: none;
  margin-top: 70px;
  color: var(--main-color);
  -webkit-tap-highlight-color: transparent;

  cursor: pointer;
  transition: 0.2s;

  &:hover, &:active {
    box-shadow: 0 0 50px 50px rgba(0,0,0, 0.5);
  }

  @media ${breakpoints.tablet} {
    min-width: 248px;
    min-height: 248px;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    margin: auto;
    margin-bottom: 90px;
  }
  @media ${breakpoints.desktop} {
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    min-width: 274px;
    min-height: 274px;
    margin-bottom: max(130px, 15vh);
    margin-right: max(165px, 11%);
  }
`;

export default ExploreButtonsStyled;