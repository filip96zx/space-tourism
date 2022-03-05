import React, { useRef } from 'react';
import Destination from '../../models/destination.model';
import DestinationComponent from './DestinationComponent';
import DestinationContainerStyled from './DestinationContainer.style';
import DestinationNavigationStyled from './DestinationNavigation.style';

import MoonPng from '../../assets/destination/image-moon.png';
import MoonWebp from '../../assets/destination/image-moon.webp';
import MarsPng from '../../assets/destination/image-mars.png';
import MarsWebp from '../../assets/destination/image-mars.webp';
import EuropaPng from '../../assets/destination/image-europa.png';
import EuropaWebp from '../../assets/destination/image-europa.webp';
import TitanPng from '../../assets/destination/image-titan.png';
import TitanWebp from '../../assets/destination/image-titan.webp';
import PageHeading from '../displayElements/PageHeading';
import useSlider from '../../helpers/slider';
import PageNavigation from '../displayElements/PageNavigation';

const destinations: Destination[] = [
  {
    id: 0,
    title: 'moon',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travelTime: '3 days',
    imagePaths: {
      webp: MoonWebp,
      png: MoonPng
    }
  },
  {
    id: 1,
    title: 'mars',
    description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 MIL. km',
    travelTime: '9 months',
    imagePaths: {
      webp: MarsWebp,
      png: MarsPng
    }
  },
  {
    id: 2,
    title: 'europa',
    description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. km',
    travelTime: '3 years',
    imagePaths: {
      webp: EuropaWebp,
      png: EuropaPng
    }
  },
  {
    id: 3,
    title: 'titan',
    description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. km',
    travelTime: '7 years',
    imagePaths: {
      webp: TitanWebp,
      png: TitanPng
    }
  },

];

const titleList = destinations.map(item => item.title);

const DestinationContainer: React.FC = () => {

  const { setPageContainerRef, currentSubpage, subpageRefs, addSubpageRef, scrollIntoSubpage } = useSlider(destinations.length);

  return (
    <>
      <PageNavigation Styling={DestinationNavigationStyled} currentSubpage={currentSubpage} subpageRefs={subpageRefs} buttonsText={titleList} scrollFn={scrollIntoSubpage} />
      <PageHeading nrAnnotation='01'>pick your destination</PageHeading>
      <DestinationContainerStyled className='page-container' ref={setPageContainerRef}>
        {destinations.map(item => <DestinationComponent key={item.id} addRef={addSubpageRef} data={item} />)}
      </DestinationContainerStyled>
    </>
  );
};

export default DestinationContainer;