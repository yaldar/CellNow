/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';
import HomeIcon from '@material-ui/icons/Home';
const Logo = () => (
  <a href="/" css={{ height: '100%' }} >
    <HomeIcon css={{ height: '100%' }} />
  </a>
);

export default Logo;
