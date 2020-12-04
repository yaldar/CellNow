/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';

function NavBar() {
  return (
    <nav css={{ marginLeft: 'auto' }}>
      <a href="/" css={{ margin: '20px' }}>one</a>
      <a href="/" css={{ margin: '20px' }}>two</a>
      <a href="/" css={{ margin: '20px' }}>three</a>
    </nav>
  );
}

export default NavBar;
