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
const inc = (cart: CartItem[], product: Product): CartItem[] => {
  return cart.map((ee) => {
    if (ee.product.id === product.id) {
      return { product: ee.product, quantity: ee.quantity + 1 };
    } else return ee;
  });
};
export const addToCart = (cart: CartItem[], setCart: CartSetter, product: Product) => {
  if (cart.some((el) => el.product.id === product.id)) {
    setCart(inc(cart, product));
  } else {
    setCart([...cart, { product: product, quantity: 1 }]);
  }
};

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
    border: '1px solid black',
    margin: 0,
    padding: 0,
  },
};
