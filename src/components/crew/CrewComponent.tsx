import React, { useEffect, useRef } from 'react';
import Crew from '../../models/crew.model';
import PagePicture from '../displayElements/PagePicture';
import CrewComponentStyled from './CrewComponent.style';


interface Props {
  data: Crew;
  addRef: (ref: HTMLDivElement) => void;
}

const CrewComponent: React.FC<Props> = ({ data, addRef }) => {

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef) {
      addRef(componentRef.current!);
    }
  }, []);

  return (
    <CrewComponentStyled ref={componentRef}>
      <PagePicture imagePaths={data.imagePaths} />
      <hr/>
      <h3 >{data.role}</h3>
      <h2 >{data.name}</h2>
      <p>{data.description}</p>
    </CrewComponentStyled>
  );
};

export default CrewComponent; 