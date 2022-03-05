import { css } from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const PageContainerBase = (mobileBackground?: string, tabletBackground?: string, desktopBackground?: string) => css`
  background-image: url(${mobileBackground});
  background-size: cover;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  
  @media ${breakpoints.tablet} {
    background-image: url(${tabletBackground});
  } 
 
  @media ${breakpoints.desktop} {
    background-image: url(${desktopBackground});
    height: 100vh;
    overflow: hidden;
  }

`;

export default PageContainerBase;