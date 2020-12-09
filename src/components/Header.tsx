/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';
import { CartType } from '../types/types';
import CartIcon from './CartIcon';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ cart }: { cart: CartType }) => (
  <div className="header" css={{ display: 'flex', marginTop: '20px', height: '50px', width:'100%' }}>
    <Logo />
    <NavBar />
    <CartIcon cart={cart} />
  </div>
);

export default Header;
