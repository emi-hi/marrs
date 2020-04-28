import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.scss';
import Home from './components/Home'
import Shop from './components/Shop'
import Repairs from './components/Repairs'
import Consign from './components/Consign'
import Studio from './components/Studio'
import ShopNav from './components/ShopNav'
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([])
  const [selectedType, setSelectedType] = useState('All')


  useEffect(() => {
    axios.get(`http://localhost:8000/api/product`)
    .then(res => {   
      setProducts(res.data)
      console.log(res.data)
    })
    .catch(error => {console.log(error)})
  }, [])
  
  return (
    <Router>
      <div className="application">
        <div className="app-main">
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
          </header>
          `<main>
            <section>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/shop">
                  <ShopNav setSelectedType={setSelectedType} selectedType={selectedType} />
                  <Shop products={products} selectedType={selectedType}/>
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
            </section>
          </main>
        </div>
      </div>
    </Router>
  );
  }
export default App;