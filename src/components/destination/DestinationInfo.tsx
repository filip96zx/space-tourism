import React from 'react';
import DestinationInfoStyled from './DestinationInfo.style';

interface Props {
  title: string;
  children: string;
};

const DestinationInfo: React.FC<Props> = ({ title, children }) => {
  return (
    <DestinationInfoStyled>
      <span className='name'>{title}</span>
      <span className='content'>{children}</span>
    </DestinationInfoStyled>
  );
};

export default DestinationInfo;