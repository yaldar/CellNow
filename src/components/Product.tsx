/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames, Theme, Interpolation } from '@emotion/react';
import { Button } from '@material-ui/core';
import React from 'react';
import { CartSetter, CartItem, Product as ProductType } from '../types/types';
import { addProduct } from '../utils';

const Product = ({ product, cart, setCart }: { product: ProductType; cart: CartItem[]; setCart: CartSetter }) => {
  const addToCart = () => {
    setCart(addProduct(cart, product));
  };
  const style: Interpolation<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
    paddingTop: '15px',
    paddingBottom: '15px',
    alignItems: 'center',
    width: '10vw',
    maxWidth: '600px',
    minWidth: '200px',
    border: 'gray 1px solid',
    borderRadius: '8px',
  };
  return (
    <div css={style}>
      <h3 css={{ margin: '20px' }}>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <hr css={{ width: '100%' }} />
      <p>{product.desc}</p>
      <Button variant="contained" color="primary" onClick={addToCart}>
        add to cart
      </Button>
    </div>
  );
};
export default Product;
