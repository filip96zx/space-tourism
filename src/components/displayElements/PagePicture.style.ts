import styled from 'styled-components';
import breakpoints from '../../globalStyles/breakpoints';

const PagePictureStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 140px;
  img {
    width: 170px;
    height: 170px;
    vertical-align: middle;
  }
  .technology-picture img{
    width: 100%;
  }

  @media ${breakpoints.tablet} {

    img {
    width: min(calc(0.39 * 100vw), calc(0.39 * 100vh));
    height:  min(calc(0.39 * 100vw), calc(0.39 * 100vh));
  }
   }

`;

export default PagePictureStyled;