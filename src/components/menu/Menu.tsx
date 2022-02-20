import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../assets/shared/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../assets/shared/icon-close.svg';
import MenuStyled from './Menu.style';
import Navigation from './Navigation';

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const menuToggleButton = (
    <button onClick={toggleMenu} className='menu-icon'>{showMenu ? <CloseIcon /> : <HamburgerIcon />}</button>
  );

  return (
    <MenuStyled>
      <div className='icons-container'>
        <LogoIcon className='logo' />
        {menuToggleButton}
      </div>
      <Navigation showMenu={showMenu} />
    </MenuStyled>
  );
};

export default Menu;