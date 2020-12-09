/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import cartImage from '../assets/cart.png';
import { CartType } from '../types/types';
import { fetchCart, getTotalItems } from '../utils';

const CartIcon = ({ cart }: { cart: CartType }) => {
  const [count, setCount] = useState(getTotalItems(cart));
  useEffect(() => {
    setCount(getTotalItems(cart));
    console.log(cart);
  }, [cart]);
  const clear = () => {
    localStorage.clear();
  };
  return (
      <a href="/cart" css={{ height: '100%', marginLeft: 'auto' }}>
        <img src={cartImage} alt="cart" css={{ height: '100%' }} />
        {count > 0 && <p>{count}</p>}
        <button type="button" onClick={clear}>
          {/*TODO remove this */}
          clear
        </button>
      </a>
  );
};

export default CartIcon;
