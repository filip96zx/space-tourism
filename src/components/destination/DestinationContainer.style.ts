import styled from 'styled-components';
import backgroundMobile from '../../assets/destination/background-destination-mobile.jpg';
import backgroundTablet from '../../assets/destination/background-destination-tablet.jpg';
import backgroundDesktop from '../../assets/destination/background-destination-desktop.jpg';
import PageContainerBase from '../displayElements/PageContainerBase.style';

const DestinationContainerStyled = styled.div`
  ${PageContainerBase(backgroundMobile, backgroundTablet, backgroundDesktop)}
`;

export default DestinationContainerStyled;