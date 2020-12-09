export type ProductType = {
  title: string;
  desc: string;
  price: string;
  image: string;
  id: number;
};

export type CartType =
  | {
      product: ProductType;
      quantity: number;
    }[]
;

export type CartSetter = React.Dispatch<React.SetStateAction<CartType>>;
