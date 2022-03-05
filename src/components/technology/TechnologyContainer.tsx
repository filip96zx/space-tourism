import React from 'react';
import useSlider from '../../helpers/slider';
import Technology from '../../models/technology.model';
import PageHeading from '../displayElements/PageHeading';
import PageNavigation from '../displayElements/PageNavigation';
import TechnologyComponent from './TechnologyComponent';
import TechnologyContainerStyled from './TechnologyContainer.style';

import LaunchLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import LaunchPortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import SpaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
import CapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import CapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import TechnologyNavigationStyled from './TechnologyNavigation.style';

const technologies: Technology[] = [
  {
    id: 1,
    title: "LAUNCH VEHICLE",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagePaths: {
      landscape: LaunchLandscape,
      portrait: LaunchPortrait,
    }
  },
  {
    id: 2,
    title: "SPACEPORT",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imagePaths: {
      landscape: SpaceportLandscape,
      portrait: SpaceportPortrait,
    }
  }, {
    id: 3,
    title: "SPACE CAPSULE",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imagePaths: {
      landscape: CapsuleLandscape,
      portrait: CapsulePortrait,
    }
  }
];

const buttonsText = technologies.map(item => (technologies.indexOf(item) + 1).toString());


const TechnologyContainer: React.FC = () => {

  const { setPageContainerRef, currentSubpage, subpageRefs, addSubpageRef, scrollIntoSubpage } = useSlider(technologies.length);

  return (
    <>
      <PageNavigation Styling={TechnologyNavigationStyled} currentSubpage={currentSubpage} subpageRefs={subpageRefs} buttonsText={buttonsText} scrollFn={scrollIntoSubpage} />
      <PageHeading nrAnnotation='03'>space launch 101</PageHeading>
      <TechnologyContainerStyled className='page-container' ref={setPageContainerRef}>
        {technologies.map(item => <TechnologyComponent key={item.id} addRef={addSubpageRef} data={item} />)}
      </TechnologyContainerStyled>
    </>
  );
};

export default TechnologyContainer;