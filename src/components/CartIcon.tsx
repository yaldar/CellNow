/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import cartImage from '../assets/cart.png';
import { CartItem } from '../types/types';
import { fetchCart, countItems } from '../utils';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';

const CartIcon = ({ cart }: { cart: CartItem[] }) => {
  const [count, setCount] = useState(countItems(cart));
  useEffect(() => {
    setCount(countItems(cart));
    console.log(cart);
  }, [cart]);
  const clear = () => {
    localStorage.clear();
  };
  return (
    <a
      href="/cart"
      css={{
        marginLeft: 'auto',
        marginRight: '20px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <ShoppingCartIcon />
      {count > 0 && <p css={{ marginTop: '0', marginBottom: '0' }}>({count})</p>}
    </a>
  );
};

export default CartIcon;
