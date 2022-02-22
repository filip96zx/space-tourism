import styled from 'styled-components';

const NavigationItemStyled = styled.li`
  counter-increment: counter;
  margin-bottom: 32px;
  
  a {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16x;
    letter-spacing: 2.7px;
    color: var(--font-color);
    text-decoration: none;
    font-weight: 200;
    text-transform: uppercase;
    :before {
      content: "0" counter(counter);
      font-weight: 700;
      margin-right: 14px;
      letter-spacing: 2.7px;
    }
  }

`;

export default NavigationItemStyled;