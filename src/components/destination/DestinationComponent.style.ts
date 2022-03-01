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

`;

export default DestinationComponentStyled;