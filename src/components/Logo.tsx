/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => (
  <a href="/" css={{ height: '100%',  }}>
    <img src={logo} alt="logo" css={{ height: '100%',  }} />
  </a>
);

export default Logo;
