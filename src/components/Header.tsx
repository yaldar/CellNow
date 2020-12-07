/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';
import { CartItemType } from '../types/types';
import CartIcon from './CartIcon';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ cart }: { cart: CartItemType[] | [] }) => (
  <div className="header" css={{ display: 'flex', marginTop: '20px' }}>
    <Logo />
    <NavBar />
    <CartIcon cart={cart} />
  </div>
);

export default Header;
