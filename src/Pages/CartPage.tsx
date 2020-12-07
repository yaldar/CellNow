import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import { CartItemType } from '../types/types';
import { getProductFromId } from '../utils';

const CartPage = ({ cart }: { cart: CartItemType[] | [] }) => (
  <div className="cart-page">
    <p>cart Page</p>
    <h1>
      {cart.length === 0 ? (
        <p> 'cart is empty yo'</p>
      ) : (
        (cart as CartItemType[]).map((e) => {
          return (
            <div>
              <p>{e.prodcut.desc}</p>
              <p>{e.quantity}</p>
            </div>
          );
        })
      )}
    </h1>
  </div>
);

export default CartPage;
