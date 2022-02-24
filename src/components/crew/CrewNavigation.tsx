import React from 'react';
import CrewNavigationStyled from './CrewNavigation.style';

interface Props {
  subpageRefs: HTMLDivElement[];
  currentSubpage: HTMLDivElement | undefined;
  scrollFn: (ref: HTMLDivElement) => void;
}

const CrewNavigation: React.FC<Props> = ({ subpageRefs, currentSubpage, scrollFn }) => {
  return (
    <CrewNavigationStyled>
      {subpageRefs?.map(ref => (
        <li key={subpageRefs.indexOf(ref)}>
          <button className={currentSubpage === ref ? 'active' : ''} onClick={() => { scrollFn(ref); }}>
          </button>
        </li>
      ))}
    </CrewNavigationStyled>
  );
};

export default CrewNavigation;