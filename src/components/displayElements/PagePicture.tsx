import React from 'react';
import PagePictureStyled from './PagePicture.style';

interface Props {
  imagePaths: {
    webp: string;
    png: string;
  };
};

const DestinationPicture: React.FC<Props> = ({ imagePaths }) => {
  return (
    <PagePictureStyled>
      <picture>
        <source srcSet={imagePaths.webp} type='image/webp' />
        <img src={imagePaths.png} alt='planet' />
      </picture>
    </PagePictureStyled>
  );
};

export default DestinationPicture;