import React, { useState, useEffect } from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './components/Home'
import Shop from './components/Shop'
import Repairs from './components/Repairs'
import Consign from './components/Consign'
import Studio from './components/Studio'
import Product from './components/Product'
import axios from 'axios';
import ROUTES_PRODUCTS from './routes/Products'
import Header from './components/Header'
import history from './history';
function App() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
    axios.get(`/api/product`)
    .then(res => {   
      setProducts(res.data)
      // console.log(res.data)
    })
    .catch(error => {console.log(error)})
  }, [])
  
  return (
    <Router history={history}>
      <div className="application">
          <Header />
          `<main className="app-main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path={ROUTES_PRODUCTS.DETAIL}
                  render={() => <Product selectedProduct={selectedProduct} products={products}/>}
              />
               <Route path={ROUTES_PRODUCTS.LIST}
                  render={() => <Shop products={products} 
                  setSelectedProduct={setSelectedProduct}/>}
              />
              <Route exact path = '/shop/' render={() => <Shop products={products}
                  setSelectedProduct={setSelectedProduct}/>} 
                  />
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
          </main>
        </div>
    </Router>
  );
  }
export default App;