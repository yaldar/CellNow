/* eslint-disable no-undef */
export type Product = {
  title: string;
  desc: string;
  price: string;
  image: string;
  id: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartSetter = React.Dispatch<React.SetStateAction<CartItem[]>>;
