/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';

import cart from '../../assets/cart.png';

const CartIcon = () => <img src={cart} alt="cart" css={{ height: '100px', marginLeft: 'auto' }} />;

export default CartIcon;
