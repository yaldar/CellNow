/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { CartItem, Product as ProductType, CartSetter } from '../types/types';
import Product from './Product';

const ProductList = ({
  products,
  cart,
  setCart,
}: {
  products: ProductType[];
  cart: CartItem[];
  setCart: CartSetter;
}) => {
  const [visible, setVisible] = useState('none');
  return (
    <div css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products?.map((el) => (
        <Product cart={cart} setCart={setCart} product={el} setVisible={setVisible} />
      ))}

      <Alert severity="success" css={{ display: visible, position: 'absolute', width: '70vw' }}>
        Product was added to cart!
      </Alert>
    </div>
  );
};

export default ProductList;
