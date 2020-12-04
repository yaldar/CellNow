/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import { ProductType } from '../../types';

function ProductList({ products }: { products: ProductType[] }) {
  return (
    <div css={{ display: 'flex', flexWrap: 'wrap' }}>
      {products?.map((el) => (
        <p css={{ margin: '20px' }}>{el.title}</p>
      ))}
    </div>
  );
}

export default ProductList;
