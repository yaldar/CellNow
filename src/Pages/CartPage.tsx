/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { jsx, css, Global, ClassNames, Interpolation, Theme } from '@emotion/react';
import { CartItem, CartSetter } from '../types/types';
import { calcTotal, getProductFromId, removeProduct, setQuantity, verticalCenterStyle } from '../utils';
import ProductInCart from '../components/ProductInCart';
import { Button } from '@material-ui/core';

const CartPage = ({ cart, setCart }: { cart: CartItem[]; setCart: CartSetter }) => {
  return (
    <div css={verticalCenterStyle}>
      <h3>Your cart</h3>
      <h3>
        {cart.length === 0 ? (
          <div css={verticalCenterStyle}>
            <p> You have no items in your cart</p>
            <Button href="/" color="secondary" variant="contained">
              continue shopping
            </Button>
          </div>
        ) : (
          cart.map((e) => <ProductInCart cart={cart} e={e} setCart={setCart} />)
        )}
      </h3>

    </div>
  );
};

export default CartPage;
