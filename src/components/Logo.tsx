/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => (
  <img src={logo} alt="logo" css={{ height: '100px' }} />
);

export default Logo;
