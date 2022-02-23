import React from 'react';
import DestinationNavigationStyled from './DestinationNavigation.style';

interface Props {
  subpageRefs: HTMLDivElement[];
  currentSubpage: HTMLDivElement | undefined;
  titleList: string[];
  scrollFn: (ref: HTMLDivElement) => void;
}

const DestinationNavigation: React.FC<Props> = ({ subpageRefs, currentSubpage, titleList, scrollFn }) => {
  return (
    <DestinationNavigationStyled>
      {subpageRefs?.map(ref => (
        <li key={subpageRefs.indexOf(ref)}>
          <button className={currentSubpage === ref ? 'active' : ''} onClick={() => { scrollFn(ref); }}>{titleList[subpageRefs.indexOf(ref)]}
          </button>
        </li>
      ))}
    </DestinationNavigationStyled>
  );
};

export default DestinationNavigation;