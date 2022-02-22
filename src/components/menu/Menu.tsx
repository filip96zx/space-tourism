import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../assets/shared/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../assets/shared/icon-close.svg';
import MenuStyled from './Menu.style';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const closeHandler = () => setShowMenu(false);

  const menuToggleButton = (
    <button onClick={toggleMenu} className='menu-icon'>{showMenu ? <CloseIcon /> : <HamburgerIcon />}</button>
  );

  return (
    <MenuStyled>
      <div className='icons-container'>
        <LogoIcon onClick={clickHandler} className='logo' />
        {menuToggleButton}
      </div>
      <Navigation showMenu={showMenu} closeMenu={closeHandler} />
    </MenuStyled>
  );
};

export default Menu;