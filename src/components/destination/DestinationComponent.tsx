import React, { useEffect, useRef } from 'react';
import Destination from '../../models/destination.model';
import DestinationComponentStyled from './DestinationComponent.style';
import DestinationInfo from './DestinationInfo';
import PagePicture from '../displayElements/PagePicture';

interface Props {
  data: Destination;
  addRef: (ref: HTMLDivElement) => void;
};

const DestinationComponent: React.FC<Props> = ({ data, addRef }) => {

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef) {
      addRef(componentRef.current!);
    }
  }, []);

  return (
    <DestinationComponentStyled ref={componentRef}>
      <PagePicture imagePaths={data.imagePaths} />
      <h2 >{data.title}</h2>
      <p>{data.description}</p>
      <DestinationInfo title='avg. distance'>{data.distance}</DestinationInfo>
      <DestinationInfo title='est. travel time'>{data.travelTime}</DestinationInfo>
    </DestinationComponentStyled>
  );
};

export default React.memo(DestinationComponent);