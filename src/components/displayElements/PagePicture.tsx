import React from 'react';
import PagePictureStyled from './PagePicture.style';

interface Props {
  imagePaths?: {
    webp: string;
    png: string;
  };
  techImagePaths?: {
    landscape: string;
    portrait: string;
  };
  alt: string;
};

const PagePicture: React.FC<Props> = ({ imagePaths, techImagePaths, alt }) => {

  if (imagePaths) {
    return (
      <PagePictureStyled className='picture-container'>
        <picture>
          <source srcSet={imagePaths.webp} type='image/webp' />
          <img src={imagePaths.png} alt={alt} />
        </picture>
      </PagePictureStyled>
    );
  } else if (techImagePaths) {
    return (
      <PagePictureStyled className='picture-container'>
        <picture className="technology-picture">
          <source src={techImagePaths.portrait} media="(min-width: 768px)" />
          <img src={techImagePaths.landscape} alt={alt} />
        </picture>
      </PagePictureStyled>
    );
  } else {
    return <></>;
  }
};

export default PagePicture;