import { CartType, ProductType } from '../types/types';

// eslint-disable-next-line import/prefer-default-export
export const fetchCart = (): CartType => {
  const p1: ProductType = {
    title: 'test',
    desc: 'test',
    price: 'test',
    image: 'test',
    id: 122,
  };
  const p2: ProductType = {
    title: 'test',
    desc: 'test',
    price: 'test',
    image: 'test',
    id: 123,
  };

  const cart: CartType = [
    { productId: 122, quantity: 1 },
    { productId: 123, quantity: 3 },
  ];
  return cart;
};
