import React, { useEffect, useRef } from 'react';
import Crew from '../../models/crew.model';
import PagePicture from '../displayElements/PagePicture';
import CrewComponentStyled from './CrewComponent.style';
import { usePageSliderHandler, Props } from '../../helpers/pageSliderHandler';


const CrewComponent: React.FC<Props<Crew>> = ({ data, addRef }) => {

  const componentRef = usePageSliderHandler(addRef);

  return (
    <CrewComponentStyled ref={componentRef}>
      <PagePicture imagePaths={data.imagePaths} alt={data.name + " photo"} />
      <hr />
      <h3 >{data.role}</h3>
      <h2 >{data.name}</h2>
      <p>{data.description}</p>
    </CrewComponentStyled>
  );
};

export default CrewComponent; 