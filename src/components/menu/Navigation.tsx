import React from 'react';
import NavigationStyled from './Navigation.style';
import NavigationItem from './NavigationItem';

interface Props {
  showMenu: boolean;
  closeMenu: () => void;
}

const Navigation: React.FC<Props> = ({ showMenu, closeMenu }) => {

  return (
    <>
      <NavigationStyled className={showMenu ? '' : 'hide'}>
        <ol>
          <NavigationItem closeMenu={closeMenu} to='/' text='home' />
          <NavigationItem closeMenu={closeMenu} to='/destination' text='destination' />
          <NavigationItem closeMenu={closeMenu} to='/crew' text='crew' />
          <NavigationItem closeMenu={closeMenu} to='/technology' text='technology' />
        </ol>
      </NavigationStyled>
    </>
  );
};

export default Navigation;