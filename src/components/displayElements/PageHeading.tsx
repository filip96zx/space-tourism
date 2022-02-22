import React from 'react';
import PageHeadingStyled from './PageHeading.style';

interface Props {
  children: string;
  nrAnnotation: string;
}


const PageHeading: React.FC<Props> = ({ children, nrAnnotation }) => {
  return (
    <PageHeadingStyled>
      <h3><span>{nrAnnotation}</span>{children}</h3>
    </PageHeadingStyled>
  );
};

export default PageHeading;