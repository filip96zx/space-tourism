import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavigationItemStyled from './NavigationItem.style';

interface Props {
  text: string;
  to: string;
  closeMenu: () => void;
}

const NavigationItem: React.FC<Props> = ({ text, to, closeMenu }) => {

  const location = useLocation();

  const isActive = () => {
    if (location.pathname === '/' && text === 'home') return 'active';
    return location.pathname.substring(1) === text ? 'active' : '';
  };

  return (
    <NavigationItemStyled >
      <Link className={isActive()} onClick={closeMenu} to={to}>{text}</Link>
    </NavigationItemStyled>
  );
};

export default NavigationItem;