/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import cartImage from '../assets/cart.png';
import { CartItem } from '../types/types';
import { fetchCart, countItems } from '../utils';

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
