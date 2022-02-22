import React from 'react';
import DestinationPictureStyled from './DestinationPicture.style';

interface Props {
  imagePaths: {
    webp: string;
    png: string;
  };
};

const DestinationPicture: React.FC<Props> = ({ imagePaths }) => {
  return (
    <DestinationPictureStyled>
      <picture>
        <source srcSet={imagePaths.webp} type='image/webp' />
        <img src={imagePaths.png} alt='planet' />
      </picture>
    </DestinationPictureStyled>
  );
};

export default DestinationPicture;