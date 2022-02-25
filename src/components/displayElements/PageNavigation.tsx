import React from 'react';
import { StyledComponent } from 'styled-components';
import PageNavigationBase from './PageNavigationBase.style';

interface Props {
  Styling?: StyledComponent<"ul", any, {}, never>;
  subpageRefs: HTMLDivElement[];
  currentSubpage: HTMLDivElement | undefined;
  buttonsText?: string[];
  scrollFn: (ref: HTMLDivElement) => void;
}

const PageNavigation: React.FC<Props> = ({ Styling, subpageRefs, currentSubpage, buttonsText, scrollFn }) => {

  if (!Styling) {
    Styling = PageNavigationBase;
  }

  return (
    <Styling>
      {subpageRefs?.map(ref => (
        <li key={subpageRefs.indexOf(ref)}>
          <button className={currentSubpage === ref ? 'active' : ''} onClick={() => scrollFn(ref)}>
            {buttonsText && buttonsText[subpageRefs.indexOf(ref)]}
          </button>
        </li>
      ))}
    </Styling>
  );
};

export default PageNavigation;