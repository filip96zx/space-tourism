import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const TechnologyComponentStyled = styled.div`
  min-width: 100vw;
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
    margin: 0 24px;
    text-align: center;
    padding-bottom: 32px;
    line-height: 25px;
    font-size: 15px;
  }

  @media ${breakpoints.tablet} {
    
    .picture-container {
      margin-top: 220px;
      img {
        height: 310px;
      }
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
  @media ${breakpoints.desktop} {
    display:flex;
    flex-direction:row-reverse;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 70px;
    section {
      width: 444px;
      margin: auto max(165px, 11%) auto max(325px, 22%);
    }

    .picture-container{
      margin: 0;
      width: min-content;
      height: min-content;
      .technology-picture{
        width: auto;
      }
      img {
        width: auto;
        height: auto;
      }
    }
    
    h3 {
      margin: 0;
      text-align: left;
    }
    
    h2 {
      text-align: left;
      display: block;
      width: max-content;
      font-size: 56px;
      line-height: 64px;
    }
    
    p {
      text-align: left;
      margin: 0;
      font-size: 18px;
      line-height: 32px;
    }
  }

`;

export default TechnologyComponentStyled;