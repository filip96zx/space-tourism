import styled from 'styled-components';
import backgroundMobile from '../../assets/home/background-home-mobile.jpg';
import backgroundTablet from '../../assets/home/background-home-tablet.jpg';
import backgroundDesktop from '../../assets/home/background-home-desktop.jpg';
import breakpoints from '../../globalStyles/breakpoints';


const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundMobile});
  background-size: cover;

  span {
    color: var(--secondary-color);
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2px;
    text-align: center;
    margin: 112px 24px 16px;
    text-transform: uppercase;
  }
  
  h2 {
    font-size: 80px;
    text-align: center;
    line-height: 100px;
    margin: 0 24px 16px;
    letter-spacing: 4.75px;
    text-transform: uppercase;
  }
  
  p {
    color: var(--secondary-color);
    font-size: 15px;
    line-height: 25px;
    margin: 0 24px 16px;
    text-align: center;
  }


  @media ${breakpoints.tablet} {
    background-image: url(${backgroundTablet});

    section {
      width: min-content;
      margin-top: max(200px, 20vh);
    }
    span {
      font-size: 20px;
      letter-spacing: 3.375px;
      margin: 0 0 24px;
    }

    h2 {
      font-size: 150px;
      line-height: 150px;
      margin-bottom: 24px;
    }
    p {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 156px;
    }
  }

  @media ${breakpoints.desktop} {
    background-image: url(${backgroundDesktop});
    flex-direction: row;
    align-items: flex-end;

    section {
      margin-left: max(165px, 11%);
    }

    span{
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.7px;
    }

    h2 {
      font-size: 150px;
      line-height: 172px;
      margin-bottom: 24px;
    }
    
    p {
      font-size: 18px;
      line-height: 32px;
    }
  }


`;

export default HomeContainerStyled;