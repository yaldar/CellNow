/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
  jsx, css, Global, ClassNames, Interpolation, Theme,
} from '@emotion/react';
import { Button, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { CartItem, CartSetter } from '../types/types';
import {
  calcTotal, currency, getProductFromId, removeProduct, setQuantity, verticalCenterStyle,
} from '../utils';
import ProductInCart from '../components/ProductInCart';

const CartPage = ({ cart, setCart }: { cart: CartItem[]; setCart: CartSetter }) => {
  const buttonStyle: Interpolation<Theme> = {
    marginBottom: '30px',
  };
  return (
    <div css={verticalCenterStyle}>
      <h3>Your cart</h3>
      <h3>
        {cart.length === 0 ? (
          <div css={verticalCenterStyle}>
            <p> You have no items in your cart</p>
            <Button component={RouterLink} to="/" color="secondary" variant="contained">
              continue shopping
            </Button>
          </div>
        ) : (
          <div>
            {cart.map((cartItem) => (
              <ProductInCart key={cartItem.product.id} cart={cart} e={cartItem} setCart={setCart} />
            ))}
            <hr />
            <div
              css={[{
                display: 'flex', flexDirection: 'column', paddingTop: '40px', justifyItems: 'space-between',
              }]}
            >
              <p>
                Your total is:
                {' '}
                {calcTotal(cart)}
                {' '}
                {currency}
              </p>
              <Button component={RouterLink} to="/" variant="outlined" color="primary" css={buttonStyle}>
                continue shopping
              </Button>
              <Button component={RouterLink} to="/checkout" color="primary" variant="contained" css={buttonStyle}>
                checkout
              </Button>
            </div>
          </div>
        )}
      </h3>
    </div>
  );
};

export default CartPage;
