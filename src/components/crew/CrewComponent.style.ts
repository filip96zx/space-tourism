import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const CrewComponentStyled = styled.div`
  scroll-snap-align: start;
  min-width: 100vw;
  min-height: 100vh;

  .tablet-container{
    display: none;
  }

  hr {
    margin: 0 24px;
    border: none;
    border-top: 1px solid var(--font-color);
    opacity: 0.5;
  }
  

  h3 {
    font-family: 'Bellefair';
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: var(--font-color);
    opacity: 0.5;
    margin-top: 74px;
  }

  h2 {
    font-family: 'Bellefair';
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 8px;
  }

  p {
    margin: 16px 24px;
    text-align: center;
    padding-bottom: 32px;
    line-height: 25px;
    font-size: 15px;
    color: var(--secondary-color);
  }

  @media ${breakpoints.tablet} { 
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-end;
    .mobile-container {
      display: none;
    }
    .tablet-container{
      display: block;
    }
    hr {
      display: none;
    }
    
    h3 {
      margin-top: 220px;
      font-size: 24px;
      line-height: 28px;
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
    .image-container {
      div {
        margin-top: 80px;
      }
      img {
        width: 450px;
        height: 570px;
      }
    }
  }
  
  @media ${breakpoints.desktop} { 
    .tablet-container {
      display: flex;
      align-items: flex-end;
    }
    .image-container{
      flex-grow: 1;
      img{
        height: 100%;
        width: 100%;
      }
    }
    section {
      display: block;
      margin-left: max(165px, 11%);
    }
    h3 {
      font-size: 32px;
      line-height: 37px;
      text-align: left;
    }
    h2 {
      font-size: 56px;
      line-height: 64px;
      text-align: left;
      margin-top: 15px;
    }
      
    p {
      font-size: 18px;
      line-height: 32px;
      max-width: 445px;
      text-align: left;
      margin: 27px 0 max(25vh, 230px) 0;
    }

  }
`;

export default CrewComponentStyled;