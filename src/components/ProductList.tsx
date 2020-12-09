/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import { CartType, ProductType, CartSetter } from '../types/types';
import Product from './Product';

const ProductList = ({
  products,
  cart,
  setCart,
}: {
  products: ProductType[];
  cart: CartType;
  setCart: CartSetter;
}) => (
  <div css={{ display: 'flex', flexWrap: 'wrap' }}>
    {products?.map((el) => (
      <Product cart={cart} setCart={setCart} product={el} />
    ))}
  </div>
);

export default ProductList;
