import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const TechnologyComponentStyled = styled.div`
  width: 100vw;
  scroll-snap-align: start;
  min-height: 100vh;

  h3 {
    color: var(--secondary-color);
    margin-top: 100px;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2.3625px;
    line-height: 17px;
  }

  h2 {
    margin: 9px 0 18px;
    width: 100vw;
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 28px;
  }
  
  p {
    color: var(--secondary-color);
    font-weight: 200;
    margin: 0 24px;
    text-align: center;
    padding-bottom: 32px;
    line-height: 25px;
    font-size: 15px;
  }

  @media ${breakpoints.tablet} {
    
    picture{
      width: 100%;
    }
   
    img {
      height: 30vh
    }

    h3 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }

    h2 {
      font-size: 40px;
      line-height: 46px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      margin: 0 20vw;
    }
  }

`;

export default TechnologyComponentStyled;