import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';


const DestinationInfoStyled = styled.div`
  width: 100%;
  margin: 32px 0 32px;
  text-align: center;

  span {
    display: block;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .name {
    color: var(--secondary-color);
    font-family: "Barlow Condensed", sans-serif;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
  }

  .content {
    font-family: "Bellefair", sans-serif;
    font-size: 28px;
    line-height: 32px;
  }

  @media ${breakpoints.desktop} {
    width: auto;
    text-align: left;
  }
  
`;

export default DestinationInfoStyled;