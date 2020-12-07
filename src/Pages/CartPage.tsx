import React from 'react';
/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import { CartType } from '../types/types';

const CartPage = ({ c }: {c: CartType | []}) => (
  <div className="cart-page">
    <p>cart Page</p>
  </div>
);

export default CartPage;
