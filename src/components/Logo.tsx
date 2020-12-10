/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { navIconStyle } from '../utils';

const Logo = () => (
  <Link to="/" css={navIconStyle}>
    <HomeIcon css={{ height: '100%', marginLeft: '20px' }} />
  </Link>
);

export default Logo;
