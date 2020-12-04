/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import logo from './logo.png';
import cart from './cart.png';

const Header = () => (
  <div className="header" css={{ display: 'flex', marginTop: '20px' }}>
    <img src={logo} alt="logo" css={{ height: '100px' }} />
    <nav>
      <a href="/">one</a>
      <a href="/">two</a>
      <a href="/">three</a>
    </nav>
    <img src={cart} alt="cart" css={{ height: '100px', marginLeft: 'auto' }} />
  </div>
);

export default Header;
