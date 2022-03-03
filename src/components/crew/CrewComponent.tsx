import React from 'react';
import Crew from '../../models/crew.model';
import PagePicture from '../displayElements/PagePicture';
import CrewComponentStyled from './CrewComponent.style';
import { usePageSliderHandler, Props } from '../../helpers/pageSliderHandler';


const CrewComponent: React.FC<Props<Crew>> = ({ data, addRef }) => {

  const componentRef = usePageSliderHandler(addRef);

  return (
    <CrewComponentStyled ref={componentRef}>
      <div className="mobile-container">
        <PagePicture imagePaths={data.imagePaths} alt={data.name + " photo"} />
        <hr />
        <section>
        <h3 >{data.role}</h3>
        <h2 >{data.name}</h2>
        <p>{data.description}</p>
        </section>
      </div>
      <div className="tablet-container">
        <section>
          <h3 >{data.role}</h3>
          <h2 >{data.name}</h2>
          <p>{data.description}</p>
        </section>
        <div className="image-container">
          <PagePicture imagePaths={data.imagePaths} alt={data.name + " photo"} />
        </div>
      </div>
    </CrewComponentStyled>
  );
};

export default CrewComponent; 