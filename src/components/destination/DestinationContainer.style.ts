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
  position: relative;


`;

export default DestinationContainerStyled;