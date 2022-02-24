import styled from 'styled-components';

const CrewComponentStyled = styled.div`
  scroll-snap-align: start;
  min-width: 100vw;
  min-height: 100vh;

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
    font-weight: 200;
    margin: 16px 24px;
    text-align: center;
    padding-bottom: 32px;
    line-height: 25px;
    font-size: 15px;
  }

`;

export default CrewComponentStyled;