/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames, Theme, Interpolation,
} from '@emotion/react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { CartSetter, CartItem, Product as ProductType } from '../types/types';
import { addProduct, cardStyle, currency } from '../utils';

const Product = ({
  product, cart, setCart, setVisible: setVisible,
}: { product: ProductType; cart: CartItem[]; setCart: CartSetter, setVisible:any }) => {
  const addToCart = () => {
    setCart(addProduct(cart, product));
    setVisible('block');
    setTimeout(() => setVisible('none'), 800);
  };
  // const style = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   margin: '20px',
  //   paddingBottom: '15px',
  //   alignItems: 'center',
  //   width: '10vw',
  //   maxWidth: '600px',
  //   minWidth: '300px',
  // };

  return (
    <Card css={cardStyle}>
      <CardActionArea>
        <CardMedia css={{ height: '180px', backgroundSize: 'contain' }} image={product.image} title={product.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center" css={{ height: '30px' }}>
            {product.desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" css={{ height: '30px' }}>
            {product.price}
            {' '}
            {currency}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions css={{ display: 'flex' }}>
        <Button variant="contained" color="primary" onClick={addToCart}>
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
export default Product;
