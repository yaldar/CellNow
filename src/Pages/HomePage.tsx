/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import { ProductType } from '../types';

const HomePage = ({ products }: { products: ProductType[] }) => (
  <div className="cart-page" css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <p>products Page</p>
    <Banner />
    <ProductList products={products} />
  </div>
);

export default HomePage;
