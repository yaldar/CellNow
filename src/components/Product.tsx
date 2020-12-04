/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import { ProductType } from '../types';

const Product = ({ product, c }:{ product: ProductType, c:string }) => (
  <div css={{ display: 'flex', flexWrap: 'wrap' }}>
    <p css={{ margin: '20px' }}>{product.title}</p>
  </div>
);
export default Product;
