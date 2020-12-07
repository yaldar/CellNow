/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import { CartItemType, ProductType } from '../types/types';
import { addToCart } from '../utils';

const Product = ({
  product,
  cart,
  setCart,
}: {
  product: ProductType;
  cart: CartItemType[] | [];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[] | []>>;
}) => {

  return (
    <div css={{ display: 'flex', flexWrap: 'wrap' }}>
      <p css={{ margin: '20px' }}>name: {product.title}</p>
      <button onClick={()=>addToCart(cart, setCart, product)} type="button">
        +
      </button>

    </div>
  );
};
export default Product;
