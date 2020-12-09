/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import { CartSetter, CartType, ProductType } from '../types/types';
import { addToCart } from '../utils';

const Product = ({ product, cart, setCart }: { product: ProductType; cart: CartType; setCart: CartSetter }) => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
      <p css={{ margin: '20px' }}>name: {product.title}</p>
      <img src={product.image} alt={product.title} />
      <button onClick={() => addToCart(cart, setCart, product)} type="button">
        add to cart
      </button>
    </div>
  );
};
export default Product;
