/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import { CartType, ProductType } from '../types/types';
import Product from './Product';

const ProductList = ({
  products,
  c,
  setC,
}: {
  products: ProductType[];
  c: CartType;
  setC: React.Dispatch<React.SetStateAction<CartType>>;
}) => (
  <div css={{ display: 'flex', flexWrap: 'wrap' }}>
    {products?.map((el) => (
      <Product c={c} setC={setC} product={el} />
    ))}
  </div>
);

export default ProductList;
