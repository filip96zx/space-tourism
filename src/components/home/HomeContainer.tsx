import React from 'react';
import ExploreButton from './ExploreButton';
import HomeContainerStyled from './HomeContainer.style';


const HomeContainer: React.FC = () => {
  return (
    <HomeContainerStyled className='page-container'>
      <section>
        <span>SO, YOU WANT TO TRAVEL TO</span>
        <h2>SPACE</h2>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </section>
      <ExploreButton />
    </HomeContainerStyled>
  );
};

export default HomeContainer;