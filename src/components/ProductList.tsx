/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import { CartItem, Product as ProductType, CartSetter } from '../types/types';
import Product from './Product';

const ProductList = ({
  products,
  cart,
  setCart,
}: {
  products: ProductType[];
  cart: CartItem[];
  setCart: CartSetter;
}) => (
  <div css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {products?.map((el) => (
      <Product cart={cart} setCart={setCart} product={el} />
    ))}
  </div>
);

export default ProductList;
