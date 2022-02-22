import React, { useState } from 'react';
import Destination from '../../models/destination.model';
import DestinationComponent from './DestinationComponent';
import DestinationContainerStyled from './DestinationContainer.style';

import MoonPng from '../../assets/destination/image-moon.png';
import MoonWebp from '../../assets/destination/image-moon.webp';
import MarsPng from '../../assets/destination/image-mars.png';
import MarsWebp from '../../assets/destination/image-mars.webp';
import EuropaPng from '../../assets/destination/image-europa.png';
import EuropaWebp from '../../assets/destination/image-europa.webp';
import TitanPng from '../../assets/destination/image-titan.png';
import TitanWebp from '../../assets/destination/image-titan.webp';

export interface DestinationRef { title: string, ref: HTMLDivElement; }

const DestinationContainer: React.FC = () => {

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

  const [destinationsRefs, setDestinationsRefs] = useState<DestinationRef[]>([]);

  const addDestinationRef = (title: string, ref: HTMLDivElement) => {
    const newRef = { title, ref };
    setDestinationsRefs(prevState => [...prevState.filter(item => item.title !== title), newRef]);
  };

  return (
    <DestinationContainerStyled>
      <h3><span>01</span> pick your destination</h3>
      {destinations.map(item => <DestinationComponent key={item.id} addRef={addDestinationRef} destinationRefs={destinationsRefs} data={item} />)}
    </DestinationContainerStyled>
  );
};

export default DestinationContainer;