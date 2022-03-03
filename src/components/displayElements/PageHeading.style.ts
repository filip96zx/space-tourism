import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const PageHeadingStyled = styled.h3`

  position: absolute;
  top: 88px;
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  width: 100%;
  letter-spacing: 2.7px;
  span {
    opacity: 0.25;
    font-weight: bold;
    margin-right: 18px;
  }
  

  @media ${breakpoints.tablet} {
    margin-left: calc( 0.05 * 100vw );
    top: 136px;
    font-size: 20px;
    width: auto;
    text-align: left;
    letter-spacing: 3.375px;
  }

  @media ${breakpoints.desktop} {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    margin-left: calc( 0.11 * 100vw );
    top: 212px;
  }
`;

export default PageHeadingStyled;