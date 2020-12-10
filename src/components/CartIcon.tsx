/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartItem } from '../types/types';
import { countItems } from '../utils';

const CartIcon = ({ cart }: { cart: CartItem[] }) => {
  const [count, setCount] = useState(countItems(cart));
  useEffect(() => {
    setCount(countItems(cart));
  }, [cart]);
  const clear = () => {
    localStorage.clear();
  };
  return (
    <Link
      to="/cart"
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
      {count > 0 && (
      <p css={{ marginTop: '0', marginBottom: '0' }}>
        (
        {count}
        )
      </p>
      )}
    </Link>
  );
};

export default CartIcon;
