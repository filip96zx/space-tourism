import { useNavigate } from 'react-router-dom';
import ExploreButtonsStyled from './ExploreButton.style';

const ExploreButton = () => {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('destination');
  };

  return <ExploreButtonsStyled onClick={clickHandler}>EXPLORE</ExploreButtonsStyled>;
};

export default ExploreButton;