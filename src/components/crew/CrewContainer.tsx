import React, { useRef } from 'react';
import useSlider from '../../helpers/slider';

import DouglasPng from '../../assets/crew/image-douglas-hurley.png';
import DouglasWebp from '../../assets/crew/image-douglas-hurley.webp';
import MarkPng from '../../assets/crew/image-mark-shuttleworth.png';
import MarkWebp from '../../assets/crew/image-mark-shuttleworth.webp';
import VictorPng from '../../assets/crew/image-victor-glover.png';
import VictorWebp from '../../assets/crew/image-victor-glover.webp';
import AnoushehPng from '../../assets/crew/image-anousheh-ansari.png';
import AnoushehWebp from '../../assets/crew/image-anousheh-ansari.webp';
import PageHeading from '../displayElements/PageHeading';
import CrewContainerStyled from './CrewContainer.style';
import CrewComponent from './CrewComponent';
import PageNavigation from '../displayElements/PageNavigation';
import CrewNavigationStyled from './CrewNavigation.style';

const crew = [
  {
    id: 0,
    role: 'commander',
    name: 'Douglas Hurley',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    imagePaths: {
      webp: DouglasPng,
      png: DouglasWebp
    }
  },
  {
    id: 1,
    role: 'mission specialist',
    name: 'Mark Shuttleworth',
    description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    imagePaths: {
      webp: MarkPng,
      png: MarkWebp
    }
  },
  {
    id: 2,
    role: 'pilot',
    name: 'Victor Glover',
    description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    imagePaths: {
      webp: VictorPng,
      png: VictorWebp
    }
  },
  {
    id: 3,
    role: 'Flight Engineer',
    name: 'Anousheh Ansari',
    description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    imagePaths: {
      webp: AnoushehPng,
      png: AnoushehWebp
    }
  }
];

const CrewContainer: React.FC = () => {

  const { setPageContainerRef, currentSubpage, subpageRefs, addSubpageRef, scrollIntoSubpage } = useSlider(crew.length);

  return (
    <>
      <PageNavigation Styling={CrewNavigationStyled} currentSubpage={currentSubpage} subpageRefs={subpageRefs} scrollFn={scrollIntoSubpage} />
      <PageHeading nrAnnotation='02'>Meet your crew</PageHeading>
      <CrewContainerStyled className='page-container' ref={setPageContainerRef}>
        {crew.map(item => <CrewComponent key={item.id} addRef={addSubpageRef} data={item} />)}
      </CrewContainerStyled>
    </>
  );
};

export default CrewContainer;