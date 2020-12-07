export type ProductType = {
  title: string;
  desc: string;
  price: string;
  image: string;
  id: number;
};


// export type r = Array<{
//   productId: number;
//   quantity: number;
// }> | null;

type quantity = number;
type CartType = {
  [productId: number]: quantity
} | null;
