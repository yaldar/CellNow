/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Header from './components/Header';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';

import { mockProducts } from './mockData/index';
import ProductList from './components/ProductList';
import { cssReset, fetchCart } from './utils';
import NotFound from './Pages/NotFound';

const App = () => {
  const [cart, setCart] = useState(fetchCart());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <div className="body">
        <Router>
          <Header cart={cart} />
          <Switch>
            <Route exact path="/cart">
              <CartPage cart={cart} setCart={setCart} />
            </Route>
            <Route exact path="/">
              <HomePage>
                <ProductList products={mockProducts} cart={cart} setCart={setCart} />
              </HomePage>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
      <Global styles={cssReset} />
    </div>
  );
};

export default App;
