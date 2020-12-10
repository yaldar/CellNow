/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';
import HomeIcon from '@material-ui/icons/Home';
import { navIconStyle } from '../utils';
const Logo = () => (
  <a href="/" css={navIconStyle}>
    <HomeIcon css={{ height: '100%' }} />
  </a>
);

export default Logo;
