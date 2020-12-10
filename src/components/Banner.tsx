/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames, keyframes,
} from '@emotion/react';
import React from 'react';
import bannerImage from '../assets/banner.png';

const fade = keyframes`
from {
  transform: translateY(-10px);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
`;

const Banner = () => (
  <div css={{ display: 'flex', marginTop: '10px', animation: `${fade} 500ms ease-in` }}>
    <img src={bannerImage} alt="banner" css={{ width: '100%', height: '25vw' }} />
    <h1
      css={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '10vw',
        color: 'gray',
        fontSize: '3.5vw',
      }}
    >
      Welcome to CellNow!
    </h1>
  </div>
);

export default Banner;
