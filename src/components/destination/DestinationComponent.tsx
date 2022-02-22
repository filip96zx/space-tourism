import React, { useEffect, useRef } from 'react';
import Destination from '../../models/destination.model';
import DestinationComponentStyled from './DestinationComponent.style';
import { DestinationRef } from './DestinationContainer';
import DestinationInfo from './DestinationInfo';
import DestinationNavigation from './DestinationNavigation';
import DestinationPicture from './DestinationPicture';

interface Props {
  data: Destination;
  addRef: (title: string, ref: HTMLDivElement) => void;
  destinationRefs: DestinationRef[];
};

const DestinationComponent: React.FC<Props> = ({ data, addRef, destinationRefs }) => {

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef) {
      addRef(data.title, componentRef.current!);
    }
  }, [componentRef]);

  const scrollIntoDestinationHandler = (ref: HTMLDivElement) => ref.scrollIntoView({ behavior: 'smooth' });

  return (
    <DestinationComponentStyled ref={componentRef}>
      <DestinationPicture imagePaths={data.imagePaths} />
      <DestinationNavigation currentTitle={data.title} destinationRefs={destinationRefs} scrollFn={scrollIntoDestinationHandler} />
      <h2 >{data.title}</h2>
      <p>{data.description}</p>
      <DestinationInfo title='avg. distance'>{data.distance}</DestinationInfo>
      <DestinationInfo title='est. travel time'>{data.travelTime}</DestinationInfo>
    </DestinationComponentStyled>
  );
};

export default DestinationComponent;