import React from 'react';
import { DestinationRef } from './DestinationContainer';
import DestinationNavigationStyled from './DestinationNavigation.style';

interface Props {
  destinationRefs: DestinationRef[];
  currentTitle: string;
  scrollFn: (ref: DestinationRef) => void;
}

const DestinationNavigation: React.FC<Props> = ({ destinationRefs, currentTitle, scrollFn }) => {
  return (
    <DestinationNavigationStyled>
      {destinationRefs?.map(ref => (
        <li key={destinationRefs.indexOf(ref)}>
          <button className={currentTitle === ref.title ? 'active' : ''} onClick={() => { scrollFn(ref); }}>{ref.title}
          </button>
        </li>
      ))}
    </DestinationNavigationStyled>
  );
};

export default DestinationNavigation;