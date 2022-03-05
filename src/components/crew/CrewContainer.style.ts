import styled from 'styled-components';
import backgroundMobile from '../../assets/crew/background-crew-mobile.jpg';
import backgroundTablet from '../../assets/crew/background-crew-tablet.jpg';
import backgroundDesktop from '../../assets/crew/background-crew-desktop.jpg';

import PageContainerBase from '../displayElements/PageContainerBase.style';


const CrewContainerStyled = styled.div`
  ${PageContainerBase(backgroundMobile, backgroundTablet, backgroundDesktop)}
`;

export default CrewContainerStyled;