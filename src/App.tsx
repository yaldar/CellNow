/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Header from './components/Header/Header';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="body">
      <Router>
        <Switch>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  </div>
);

export default App;
