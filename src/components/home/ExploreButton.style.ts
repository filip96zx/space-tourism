import styled from 'styled-components';

const ExploreButtonsStyled = styled.button`
  display: block;
  text-transform: uppercase;
  font-family: 'Bellefair', serif;
  line-height: 23px;
  font-size: 20px;
  letter-spacing: 1.25px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--font-color);
  border: none;
  margin-top: 70px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: 0.2s;

  &:hover, &:active {
    box-shadow: 0 0 50px 50px rgba(0,0,0, 0.5);
  }
`;

export default ExploreButtonsStyled;