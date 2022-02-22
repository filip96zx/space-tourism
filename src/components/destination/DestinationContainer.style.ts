import styled from 'styled-components';
import backgroundMobile from '../../assets/destination/background-destination-mobile.jpg';

const DestinationContainerStyled = styled.div`
  background-image: url(${backgroundMobile});
  background-size: cover;
  width: 100vw;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  h3 {
    position: absolute;
    margin-top: 88px;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 16px;
    text-align: center;
    width: 100%;
    letter-spacing: 2.7px;
    span {
      opacity: 0.25;
      font-weight: 400;
    }
  }
`;

export default DestinationContainerStyled;