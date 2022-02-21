import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItemStyled from './NavigationItem.style';

interface Props {
  text: string;
  to: string;
}

const NavigationItem: React.FC<Props> = ({ text, to }) => {
  return (
    <NavigationItemStyled>
      <Link to={to}>{text}</Link>
    </NavigationItemStyled>
  );
};

export default NavigationItem;