/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Header from './components/Header';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import './App.css';

import { mockProducts } from './mockData/index';
import ProductList from './components/ProductList';

const App = () => {
  const [c, setC] = useState('');

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
                <ProductList products={mockProducts} c={c} />
              </HomePage>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
