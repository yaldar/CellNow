/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';
import CartIcon from './CartIcon';
import NavBar from './NavBar';

const Header = () => (
  <div className="header" css={{ display: 'flex', marginTop: '20px' }}>
    <img src={logo} alt="logo" css={{ height: '100px' }} />
    <NavBar />
    <CartIcon />
  </div>
);

export default Header;
