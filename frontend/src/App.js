import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Main from './components/Main'
import Products from './components/Products'
import Repairs from './components/Repairs'
import Consign from './components/Consign'
import Studio from './components/Studio'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Shop</Link>
          </li>
          <li>
            <Link to="/repairs">Repairs</Link>
          </li>
          <li>
            <Link to="/consign">Consign/Sell/Trade</Link>
          </li>
          <li>
            <Link to="/studio">Studio</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/product">
            <Products />
          </Route>
          <Route path="/repairs">
            <Repairs />
          </Route>
          <Route path="/consign">
            <Consign />
          </Route>
          <Route path="/studio">
            <Studio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
export default App;