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
          <NavigationItem closeMenu={closeMenu} to='/space-tourism/' text='home' />
          <NavigationItem closeMenu={closeMenu} to='/space-tourism/destination' text='destination' />
          <NavigationItem closeMenu={closeMenu} to='/space-tourism/crew' text='crew' />
          <NavigationItem closeMenu={closeMenu} to='/space-tourism/technology' text='technology' />
        </ol>
      </NavigationStyled>
    </>
  );
};

export default Navigation;