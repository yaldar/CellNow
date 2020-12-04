/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import { ProductType } from '../types';

const ProductList = ({ products, c }: { products: ProductType[], c:string }) => (
  <div css={{ display: 'flex', flexWrap: 'wrap' }}>
    {products?.map((el) => (
      <p css={{ margin: '20px' }}>{el.title}</p>
    ))}
  </div>
);

export default ProductList;
