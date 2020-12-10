/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames, Interpolation, Theme } from '@emotion/react';
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
        Nav link one
      </Link>
      <Link to="/" css={navLinkStyle}>
        Nav link two
      </Link>
      <Link to="/" css={navLinkStyle}>
        Nav link three
      </Link>
    </nav>
  );
};

export default NavBar;
