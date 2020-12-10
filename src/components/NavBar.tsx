/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames, Interpolation, Theme } from '@emotion/react';
import React from 'react';

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
      <a href="/" css={navLinkStyle}>
        Nav link one
      </a>
      <a href="/" css={navLinkStyle}>
        Nav link two
      </a>
      <a href="/" css={navLinkStyle}>
        Nav link three
      </a>
    </nav>
  );
};

export default NavBar;
