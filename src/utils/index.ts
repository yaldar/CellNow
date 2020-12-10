import { Interpolation, Theme } from '@emotion/react';
import { mockProducts } from '../mockData';
import { CartItem, Product } from '../types/types';

export const fetchCart = (): CartItem[] => {
  const d = localStorage.getItem('cart');
  return d ? JSON.parse(d) : [];
};

const quantityAllowed = (quantity: number): boolean => true;

const incrementQuantity = (cart: CartItem[], product: Product): CartItem[] => cart.map((cartItem) => {
  if (cartItem.product.id === product.id) {
    return { product: cartItem.product, quantity: cartItem.quantity + 1 };
  } return cartItem;
});

export const setQuantity = (cart: CartItem[], product: Product, newQuantity: number): CartItem[] => cart.map((cartItem) => {
  if (cartItem.product.id === product.id) {
    return { product: cartItem.product, quantity: newQuantity };
  } return cartItem;
});

export const addProduct = (cart: CartItem[], product: Product) => {
  if (cart.some((cartItem) => cartItem.product.id === product.id)) {
    const newCart = incrementQuantity(cart, product);
    return newCart;
  }
  return [...cart, { product, quantity: 1 }];
};
export const removeProduct = (cart: CartItem[], product: Product) => cart.filter((el) => el.product.id !== product.id);

export const fetchAllproducts = () => mockProducts;

export const getProductFromId = (id: number) => fetchAllproducts().find((el) => el.id === id);

export const countItems = (cart: CartItem[]) => {
  let count = 0;
  cart.forEach((el) => {
    count += el.quantity;
  });
  return count;
};

export const cssReset = {
  '*': {
    // border: '1px solid black',
    margin: 0,
    padding: 0,
  },
};

export const verticalCenterStyle: Interpolation<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const priceToNum = (price: string) => parseInt(price, 10);
export const calcTotal = (cart: CartItem[]) => cart.reduce((acc, curr) => acc + curr.quantity * priceToNum(curr.product.price), 0);

export const currency = 'SEK';

export const navIconStyle = {
  marginRight: '20px',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  justifyItems: 'center',
};

export const cardStyle: Interpolation<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  margin: '20px',
  paddingBottom: '15px',
  alignItems: 'center',
  width: '10vw',
  maxWidth: '600px',
  minWidth: '300px',
};
