/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import { CartItem } from '../types/types';
import { navIconStyle } from '../utils';
import CartIcon from './CartIcon';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ cart }: { cart: CartItem[] }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);
  const r = useRef(null);
  const collapseOnScroll = () => {
    setExpanded(false);
  };
  const collapseOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id && target.id !== 'icon') setExpanded(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', collapseOnScroll);
    document.addEventListener('click', collapseOnClick);
    return () => {
      document.removeEventListener('scroll', collapseOnScroll);
      document.removeEventListener('click', collapseOnClick);
    };
  }, []);

  const style = {
    display: 'flex',
    height: '70px',
    width: '100%',
    backgroundColor: 'rgba(19, 180, 255, 0.74)',
  };
  return (
    <div id="navbar" css={style}>
      <MenuIcon className="icon" onClick={toggleExpanded} ref={r} css={navIconStyle} />
      <Logo />
      <NavBar />
      <CartIcon cart={cart} />
    </div>
  );
};

export default Header;
