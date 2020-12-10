/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import {
  jsx, css, Global, ClassNames, Interpolation, Theme,
} from '@emotion/react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  Typography,
} from '@material-ui/core';
import { Label, VerifiedUser } from '@material-ui/icons';
import { CartItem, CartSetter, Product } from '../types/types';
import {
  calcTotal, cardStyle, currency, removeProduct, setQuantity, verticalCenterStyle,
} from '../utils';

const ProductInCart = ({ e, setCart, cart }: { e: CartItem; setCart: CartSetter; cart: CartItem[] }) => {
  const { product, quantity } = e;
  const valid = (val: string) => true;
  const [newQuantity, setNewQuantity] = useState(quantity.toString());
  const stringId = product.id.toString();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setCart(setQuantity(cart, product, parseInt(newQuantity, 10)));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (valid(val)) setNewQuantity(val);
  };
  const remove = () => {
    setCart(removeProduct(cart, product));
  };
  const r = useRef<HTMLFormElement>(null);
  const sumbit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    r.current?.requestSubmit();
  };
  return (
    <Card css={cardStyle}>
      <CardActionArea>
        <CardMedia
          css={{ height: '180px', backgroundSize: 'contain' }}
          image={e.product.image}
          title={e.product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {e.product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" css={{ height: '30px' }}>
            {e.product.price}
            {' '}
            {currency}
          </Typography>
        </CardContent>
      </CardActionArea>
      <form onSubmit={handleSubmit} ref={r} css={verticalCenterStyle}>
        <input type="number" min="0" id={stringId} value={newQuantity} onChange={handleChange} />
        <Button onClick={sumbit} variant="outlined">
          update quantity
        </Button>
      </form>
      <CardActions>
        <Button variant="contained" color="primary" onClick={remove}>
          Remove from cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductInCart;
