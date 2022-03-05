import React from 'react';
import Technology from '../../models/technology.model';
import { usePageSliderHandler, Props } from '../../helpers/pageSliderHandler';
import TechnologyComponentStyled from './TechnologyComponent.style';
import PagePicture from '../displayElements/PagePicture';

const TechnologyComponent: React.FC<Props<Technology>> = ({ data, addRef }) => {

  const componentRef = usePageSliderHandler(addRef);

  return (
    <TechnologyComponentStyled ref={componentRef}>
      <PagePicture techImagePaths={data.imagePaths} alt={data.title + " photo"}/>
      <section>
      <h3>the terminology...</h3>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      </section>
    </TechnologyComponentStyled>
  );
};

export default TechnologyComponent;