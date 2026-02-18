/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import Banner from '../components/Banner';

const HomePage = ({ children }: { children: React.ReactNode }) => (
  <div className="cart-page" css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Banner />
    {children}
  </div>
);

export default HomePage;
