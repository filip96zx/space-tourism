import styled from 'styled-components';

const PageHeadingStyled = styled.div`
position: absolute;
z-index: 1;
width: 100vw;

  h3 {
    position: absolute;
    top: 88px;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    width: 100%;
    letter-spacing: 2.7px;
    span {
      opacity: 0.25;
      font-weight: bold;
      margin-right: 18px;
    }
  }
`;

export default PageHeadingStyled;