/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';

import { mockProducts } from './mockData/index';
import ProductList from './components/ProductList';
import { CartType } from './types/types';
import { fetchCart } from './utils';

const App = () => {
  const [c, setC] = useState<CartType>(fetchCart());
  const GlobalStyleReset = {
    '*': {
      border: '1px dotted black',
      margin: 0,
      padding: 0,
    },
  };

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Router>
          <Switch>
            <Route exact path="/cart">
              <CartPage c={c} />
            </Route>
            <Route exact path="/">
              <HomePage>
                <ProductList products={mockProducts} c={c} setC={setC} />
              </HomePage>
            </Route>
          </Switch>
        </Router>
      </div>
      <Global styles={GlobalStyleReset} />
    </div>
  );
};

export default App;
