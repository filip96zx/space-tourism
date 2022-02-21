import styled from 'styled-components';
import backgroundMobile from '../../assets/home/background-home-mobile.jpg';


const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundMobile});
  background-size: cover;

  span {
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2px;
    font-weight: 200;
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
    font-size: 15px;
    line-height: 25px;
    font-weight: 200;
    margin: 0 24px 16px;
    text-align: center;
  }

`;

export default HomeContainerStyled;