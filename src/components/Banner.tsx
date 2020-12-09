/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames, keyframes } from '@emotion/react';
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
  <div css={{ display: 'flex', marginTop:'10px', animation: `${fade} 500ms ease-in` }}>
    <img src={bannerImage} alt="banner" css={{ width: '100%' }} />
    <h1
      css={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '10vw',
        color: 'gray',
      }}
    >
      Welcome to CellNow!
    </h1>
  </div>
);

export default Banner;

// const t = css
//   .login-wrapper {
//     backdrop-filter: blur(5px);
//     animation: fadeInText 1s;
//     background-color: var(--main-color);
//     border-radius: 20px;
//   }
