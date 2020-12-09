import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import { CartType, CartSetter } from '../types/types';
import { getProductFromId } from '../utils';

const CartPage = ({ cart, setCart }: { cart: CartType; setCart: CartSetter }) => (
  <div className="cart-page">
    <p>cart Page</p>
    <h1>
      {cart.length === 0 ? (
        <p> 'cart is empty yo'</p>
      ) : (
        cart.map((e) => {
          const { product, quantity } = e;
          const [newQuantity, setnewQuantity] = useState(quantity);
          const id = product.id.toString();
          const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            //  setCart()
          };
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            // if(valid()) setnewQuantity(parseInt(e.target.value));
          };
          return (
            <div>
              <p>{e.product.desc}</p>
              <p>{e.quantity}</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor={id}></label>
                <input type="text" id={id} value={newQuantity} onChange={handleChange} />
                <button formAction="sumbit">update</button>
              </form>
            </div>
          );
        })
      )}
    </h1>
  </div>
);

export default CartPage;
