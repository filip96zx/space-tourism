import React from 'react';
import Destination from '../../models/destination.model';
import DestinationComponentStyled from './DestinationComponent.style';
import DestinationInfo from './DestinationInfo';
import PagePicture from '../displayElements/PagePicture';
import { usePageSliderHandler, Props } from '../../helpers/pageSliderHandler';

const DestinationComponent: React.FC<Props<Destination>> = ({ data, addRef }) => {

  const componentRef = usePageSliderHandler(addRef);

  return (
    <DestinationComponentStyled ref={componentRef}>
      <PagePicture imagePaths={data.imagePaths} alt={data.title + " photo"} />
      <section>
        <h2 >{data.title}</h2>
        <p>{data.description}</p>
        <div className='info-container'>
          <DestinationInfo title='avg. distance'>{data.distance}</DestinationInfo>
          <DestinationInfo title='est. travel time'>{data.travelTime}</DestinationInfo>
        </div>
      </section>
    </DestinationComponentStyled>
  );
};

export default React.memo(DestinationComponent);