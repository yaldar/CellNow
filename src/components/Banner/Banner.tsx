/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import bannerImage from '../../assets/banner.png';

function Banner() {
  return (
    <div css={{ display: 'flex', overflow: 'scroll' }}>
      <img src={bannerImage} alt="banner" css={{ width: '100%' }} />
      <p css={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '50px',
        color: 'white',
      }}
      >
        Welcome to our page!
      </p>
    </div>
  );
}

export default Banner;
