/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import { jsx, css, Global, ClassNames, Interpolation, Theme } from '@emotion/react';
import { Button, Input } from '@material-ui/core';
import { CartItem, CartSetter, Product } from '../types/types';
import { calcTotal, currency, removeProduct, setQuantity, verticalCenterStyle } from '../utils';
import { Label } from '@material-ui/icons';

const ProductInCart = ({ e, setCart, cart }: { e: CartItem; setCart: CartSetter; cart: CartItem[] }) => {
  const { product, quantity } = e;
  const valid = (val: string) => true;
  const [newQuantity, setNewQuantity] = useState(quantity.toString());
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
  const r = useRef<HTMLFormElement>(null);
  const sumbit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    r.current?.requestSubmit();
  };
  return (
    <div key={stringId} css={{ display: 'flex', flexDirection: 'column' }}>
      <div css={{ display: 'flex' }}>
        <img src={e.product.image} alt="" />
        <div css={{ marginLeft: '20px' }}>
          <h3> {e.product.title}</h3>
          <p>quantity: {e.quantity}</p>

          <p>
            price: {e.quantity} {currency}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} ref={r}>
        <input type="number" min="0" id={stringId} value={newQuantity} onChange={handleChange} />
        <Button onClick={sumbit}>update quantity</Button>
      </form>
      <Button onClick={remove}>remove</Button>
    </div>
  );
};

export default ProductInCart;
