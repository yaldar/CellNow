/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import logo from '../assets/logo.png';
import { CartItem } from '../types/types';
import CartIcon from './CartIcon';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ cart }: { cart: CartItem[] }) => (
  <div
    className="header"
    css={{ display: 'flex', height: '70px', width: '100%', backgroundColor: 'rgba(19, 180, 255, 0.74)' }}
  >
    <Logo />
    <NavBar />
    <CartIcon cart={cart} />
  </div>
);

export default Header;
