import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const DestinationComponentStyled = styled.div`
  width: 100%;
  scroll-snap-align: start;
  min-height: 100vh;

  h2 {
    margin-top: 74px;
    width: 100vw;
    text-align: center;
    text-transform: uppercase;
    font-size: 64px;
    line-height: 64px;
  }

  p {
    color: var(--secondary-color);
    font-weight: 200;
    margin: 0 24px;
    text-align: center;
    padding-bottom: 32px;
    border-bottom: 1px solid #383B4B;
    line-height: 25px;
    font-size: 15px;
  }

  .full-width {
    display: none;
  }

  @media ${breakpoints.tablet} {
    .picture-container {
      margin-top: 220px;
    }
    h2 {
      font-size: 80px;
      line-height: 92px;
    }
    p {
      font-size: 16px;
      line-height: 28px;
      margin: 0 12%;
    }
    .info-container{
      margin: 0 12%;
      display: flex;
    }

  }
  @media ${breakpoints.desktop} {
    display: flex;
    align-items: center;
    gap:150px;
    min-width: 100%;
    padding-top: 10%;
    .picture-container {
      display: block;
      margin: auto;
      margin-left: 16%;
      img {
        height: auto;
        width: auto;
      }
    }
    section {
      display: block;
      width: 445px;
      margin-right: max(165px, 11%);
    }

    h2 {
      font-size: 100px;
      line-height: 115px;
      text-align: left;
    }
    p {
      font-size: 18px;
      line-height: 32px;
      text-align: left;
      margin: 0px;
    }
    .info-container{
      display: flex;
      justify-content: flex-start;
      margin-left: 0;
      gap: 68px;
      text-align: left;
    }

  }

`;

export default DestinationComponentStyled;