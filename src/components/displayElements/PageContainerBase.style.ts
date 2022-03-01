import { css } from 'styled-components';

const PageContainerBase = (mobileBackground?: string, tabletBackground?: string, desktopBackground?: string) => css`
  background-image: url(${mobileBackground});
  background-size: cover;
  //width: 100vw;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
`;

export default PageContainerBase;