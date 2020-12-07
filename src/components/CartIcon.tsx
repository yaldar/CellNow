/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import cartImage from '../assets/cart.png';
import { CartItemType } from '../types/types';
import { fetchCart, getTotalItems } from '../utils';

const CartIcon = ({ cart }: { cart: CartItemType[] | [] }) => {
  const [count, setCount] = useState(getTotalItems(cart));
  useEffect(() => {
    setCount(getTotalItems(cart));
    console.log(cart);
  }, [cart]);
  const clear = () => {
    localStorage.clear();
  };
  return (
    <a href="/cart">
      <img src={cartImage} alt="cart" css={{ height: '100px', marginLeft: 'auto' }} />
      {count > 0 && <p>{count}</p>}
      <button type="button" onClick={clear}>
        clear
      </button>
    </a>
  );
};

export default CartIcon;
