import React, { useEffect, useRef } from 'react';
import Destination from '../../models/destination.model';
import DestinationComponentStyled from './DestinationComponent.style';
import { DestinationRef } from './DestinationContainer';
import DestinationInfo from './DestinationInfo';
import DestinationPicture from './DestinationPicture';

interface Props {
  data: Destination;
  addRef: (title: string, ref: HTMLDivElement) => void;
};

const DestinationComponent: React.FC<Props> = ({ data, addRef }) => {

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef) {
      addRef(data.title, componentRef.current!);
    }
  }, []);

  return (
    <DestinationComponentStyled ref={componentRef}>
      <DestinationPicture imagePaths={data.imagePaths} />
      <h2 >{data.title}</h2>
      <p>{data.description}</p>
      <DestinationInfo title='avg. distance'>{data.distance}</DestinationInfo>
      <DestinationInfo title='est. travel time'>{data.travelTime}</DestinationInfo>
    </DestinationComponentStyled>
  );
};

export default React.memo(DestinationComponent);