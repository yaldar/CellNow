import { mockProducts } from '../mockData';
import { CartItemType, CartSetter, ProductType } from '../types/types';

// eslint-disable-next-line import/prefer-default-export
export const fetchCart = (): CartItemType[] => {
  const d = localStorage.getItem('cart');
  return d ? JSON.parse(d) : [];
};

const quantityAllowed = (quantity: number): boolean => true;
const findCartItem = (cart: CartItemType[] | [], product: ProductType) => {
  if(cart.length === 0) return -1;
  // const f: CartItemType | undefined = cart.find()
};
export const addToCart = (c: CartItemType[] | [], setC: CartSetter, product: ProductType) => {
  if (c.some((el) => el.prodcut.id === product.id)) {
    setC(
      (c as CartItemType[]).map((ee) => {
        if (ee.prodcut.id === product.id) {
          return { prodcut: ee.prodcut, quantity: ee.quantity + 1 };
        } else return ee;
      }),
    );
  } else {
    setC([...c, { prodcut: product, quantity: 1 }]);
  }
};

export const fetchAllproducts = () => mockProducts;

export const getProductFromId = (id: number) => fetchAllproducts().find((e) => e.id === id);

export const getTotalItems = (cart: CartItemType[] | []) => {
  let count = 0;
  cart.forEach((el) => {
    count = count + el.quantity;
  });
  return count;
};

export const cssReset = {
  '*': {
    border: '1px dotted black',
    margin: 0,
    padding: 0,
  },
};
