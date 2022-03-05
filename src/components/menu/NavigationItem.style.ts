import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const NavigationItemStyled = styled.li`
  counter-increment: counter;
  margin-bottom: 32px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  
  a {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16x;
    letter-spacing: 2.7px;
    color: var(--font-color);
    text-decoration: none;
    text-transform: uppercase;
    :before {
      content: "0" counter(counter);
      font-weight: 700;
      margin-right: 14px;
      letter-spacing: 2.7px;
    }
  }
  @media ${breakpoints.tablet} {
    padding: 0;
    margin-bottom: 0;
    a {
      display: inline-block;
      font-size: 14px;
      line-height: 17px;
      margin: 0 13px;
      padding: 40px 0;
      letter-spacing: 2.3625px;
      :before {
        content: none;
      }
      &.active {
        border-bottom: 3px solid var(--font-color);
      }
    }
    }

  @media ${breakpoints.desktop} {
    a {
      font-size: 16px;
      line-height: 19px;
      margin: 0 24px;
      letter-spacing: 2.7px;
      :before {
        content: "0" counter(counter);
        font-weight: 700;
        margin-right: 14px;
        letter-spacing: 2.7px;
        font-size: 16px;
        line-height: 19px;
      }
      :hover {
        border-bottom: 3px solid rgba(255, 255, 255 , 0.5);
      }
      &.active {
        border-bottom: 3px solid var(--font-color);
      }
    }
  }
`;

export default NavigationItemStyled;