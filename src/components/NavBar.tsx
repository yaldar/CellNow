/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames, Interpolation, Theme,
} from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navLinkStyle = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    height: '100%',
    '&:hover': { backgroundColor: 'aqua' },
  };
  return (
    <nav
      css={{
        display: 'flex',
        alignContent: 'center',
      }}
    >
      <Link to="/" css={navLinkStyle}>
        Phones
      </Link>
      <Link to="/" css={navLinkStyle}>
        Accessories
      </Link>
      <Link to="/" css={navLinkStyle}>
        Cameras
      </Link>
    </nav>
  );
};

export default NavBar;
