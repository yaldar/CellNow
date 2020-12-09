import { Interpolation, Theme } from '@emotion/react';
import { CloudUpload } from '@material-ui/icons';
import { mockProducts } from '../mockData';
import { CartItem, CartSetter, Product } from '../types/types';

// eslint-disable-next-line import/prefer-default-export
export const fetchCart = (): CartItem[] => {
  const d = localStorage.getItem('cart');
  return d ? JSON.parse(d) : [];
};

const quantityAllowed = (quantity: number): boolean => true;
// const findCartItem[] = (cart: CartType, product: ProductType) => {
//   if (cart.length === 0) return -1;
//   // const f: CartType | undefined = cart.find()
// };
const incrementQuantity = (cart: CartItem[], product: Product): CartItem[] => {
  return cart.map((ee) => {
    if (ee.product.id === product.id) {
      return { product: ee.product, quantity: ee.quantity + 1 };
    } else return ee;
  });
};

export const setQuantity = (cart: CartItem[], product: Product, newQuantity: number): CartItem[] => {
  return cart.map((ee) => {
    if (ee.product.id === product.id) {
      return { product: ee.product, quantity: newQuantity };
    } else return ee;
  });
};

export const addProduct = (cart: CartItem[], product: Product) => {
  if (cart.some((el) => el.product.id === product.id)) {
    const newCart = incrementQuantity(cart, product);
    return newCart;
  } else {
    return [...cart, { product: product, quantity: 1 }];
  }
};
export const removeProduct = (cart: CartItem[], product: Product) => cart.filter((el) => el.product.id !== product.id);

export const fetchAllproducts = () => mockProducts;

export const getProductFromId = (id: number) => fetchAllproducts().find((e) => e.id === id);

export const countItems = (cart: CartItem[]) => {
  let count = 0;
  cart.forEach((el) => {
    count = count + el.quantity;
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

const priceToNum = (price: string) => parseInt(price);
export const calcTotal = (cart: CartItem[]) =>
  cart.reduce((acc, curr) => acc + curr.quantity * priceToNum(curr.product.price), 0);

export const currency = 'SEK';
