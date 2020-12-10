/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect, useRef, useState } from 'react';
import { CartItem } from '../types/types';
import CartIcon from './CartIcon';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ cart }: { cart: CartItem[] }) => {
  const style = {
    display: 'flex',
    height: '70px',
    width: '100%',
    backgroundColor: 'rgba(19, 180, 255, 0.74)',
  };
  return (
    <div id="navbar" css={style}>
      <Logo />
      <NavBar />
      <CartIcon cart={cart} />
    </div>
  );
};

export default Header;
