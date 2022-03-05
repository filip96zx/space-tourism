import styled from 'styled-components';
import backgroundMobile from '../../assets/technology/background-technology-mobile.jpg';
import backgroundTablet from '../../assets/technology/background-technology-tablet.jpg';
import backgroundDesktop from '../../assets/technology/background-technology-desktop.jpg';
import PageContainerBase from '../displayElements/PageContainerBase.style';
import breakpoints from '../../globalStyles/breakpoints';

const TechnologyContainerStyled = styled.div`
  ${PageContainerBase(backgroundMobile, backgroundTablet, backgroundDesktop)}

  @media ${breakpoints.desktop} {
    flex-direction: column;
  }
`;

export default TechnologyContainerStyled;