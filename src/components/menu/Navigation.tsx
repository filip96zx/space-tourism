import React from 'react';
import NavigationStyled from './Navigation.style';
import NavigationItem from './NavigationItem';

interface Props {
  showMenu: boolean;
}

const Navigation: React.FC<Props> = ({ showMenu }) => {

  return (
    <>
      <NavigationStyled className={showMenu ? 'show': 'hide'}>
        <ol>
          <NavigationItem to='/' text='home' />
          <NavigationItem to='/destination' text='destination' />
          <NavigationItem to='/crew' text='crew' />
          <NavigationItem to='/technology' text='technology' />
        </ol>
      </NavigationStyled>
    </>
  );
};

export default Navigation;