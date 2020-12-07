/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React from 'react';
import { CartType, ProductType } from '../types/types';

const Product = ({
  product,
  c,
  setC,
}: {
  product: ProductType;
  c: CartType;
  setC: React.Dispatch<React.SetStateAction<CartType>>;
}) => {
  const addToCart = () => {
    if (!c) {
      setC([{ productId: product.id, quantity: 1 }]);
    } else if (!c.some((el) => el.productId === product.id)) {
      setC([...c, { productId: product.id, quantity: 1 }]);
    } else {
      setC(
        c.map((el) => {
          if (el.productId === product.id) return { productId: product.id, quantity: el.quantity + 1 };
          else return el;
        }),
      );
    }
    console.log(c);
  };
  return (
    <div css={{ display: 'flex', flexWrap: 'wrap' }}>
      <p css={{ margin: '20px' }}>{product.title}</p>
      <button onClick={addToCart} type="button">
        +
      </button>
    </div>
  );
};
export default Product;
