/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { jsx, css, Global, ClassNames, Interpolation, Theme } from '@emotion/react';
import { Button } from '@material-ui/core';
import { CartItem, CartSetter, Product } from '../types/types';
import { calcTotal, removeProduct, setQuantity, verticalCenterStyle } from '../utils';

const ProductInCart = ({ e, setCart, cart }: { e: CartItem; setCart: CartSetter; cart: CartItem[] }) => {
  const { product, quantity } = e;
  const valid = (val: string) => true;
  const [newQuantity, setNewQuantity] = useState('');
  const stringId = product.id.toString();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setCart(setQuantity(cart, product, parseInt(newQuantity)));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (valid(val)) setNewQuantity(val);
  };
  const remove = (e: React.MouseEvent) => {
    setCart(removeProduct(cart, product));
    console.log(cart);
  };
  return (
    <div key={stringId}>
      <p>
        {e.product.title} x{e.quantity}{' '}
      </p>
      <p>price: {e.quantity}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor={stringId}></label>
        <input type="number" id={stringId} value={newQuantity} onChange={handleChange} />
        <button formAction="sumbit">update</button>
      </form>
      <button onClick={remove}>remove</button>
      <hr />
      <p>Your total is: ${calcTotal(cart)}</p>
      <div css={verticalCenterStyle}>
        <Button href="/" color="secondary" variant="contained">
          continue shopping
        </Button>
        <Button href="/checkout" color="primary" variant="contained">
          checkout
        </Button>
      </div>
    </div>
  );
};

export default ProductInCart;
