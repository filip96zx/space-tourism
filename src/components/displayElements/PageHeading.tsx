import React from 'react';
import PageHeadingStyled from './PageHeading.style';

interface Props {
  children: string;
  nrAnnotation: string;
}


const PageHeading: React.FC<Props> = ({ children, nrAnnotation }) => {
  return (
    <PageHeadingStyled><span>{nrAnnotation}</span>{children}</PageHeadingStyled>
  );
};

export default PageHeading;