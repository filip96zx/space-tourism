import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItemStyled from './NavigationItem.style';

interface Props {
  text: string;
  to: string;
  closeMenu: () => void;
}

const NavigationItem: React.FC<Props> = ({ text, to, closeMenu }) => {
  return (
    <NavigationItemStyled>
      <Link onClick={closeMenu} to={to}>{text}</Link>
    </NavigationItemStyled>
  );
};

export default NavigationItem;