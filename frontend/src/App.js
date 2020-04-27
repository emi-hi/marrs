import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import './App.scss';
import Home from './components/Home'
import Shop from './components/Shop'
import Repairs from './components/Repairs'
import Consign from './components/Consign'
import Studio from './components/Studio'
import ShopNav from './components/ShopNav'


function App() {

  const [shopTrue, setShopTrue] = useState(false)

  return (
    <Router>
      <div>
        <header>
          <div>
            <img src="./images/header1.png" id="left"/>
            <span>
              <h1>Marrs Audio</h1>
              <h2>2008 Douglas St - Victoria BC</h2>
              <h3>778-928-4574</h3>
              <h3>julian.marrsaudio@gmail.com</h3>
            </span>
            <img src="./images/header2.png" id="right"/>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
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
          </div>
          {shopTrue && <ShopNav />}
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <ShopNav />
            <Shop />
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