import React, { useState, useEffect } from 'react';
import {
  Router,
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
import Product from './components/Product'
import axios from 'axios';
import ROUTES_PRODUCTS from './routes/Products'
import Header from './components/Header'
import history from './history';
function App() {
  const [products, setProducts] = useState([])
  const [selectedType, setSelectedType] = useState('All')
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
        <div className="app-main">
          <Header setSelectedType={setSelectedType}/>
          `<main>
            <section>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path={ROUTES_PRODUCTS.DETAIL}
                  render={() => <Product selectedProduct={selectedProduct}/>}
              />
              
                <Route path="/shop/Accessories">
                  <Shop products={products}
                  selectedType={'Accessories'}
                  setSelectedProduct={setSelectedProduct}/>
                </Route>
                <Route path="/shop/Amplifiers">
                  <Shop
                  products={products}
                  selectedType={'Amplifiers'}
                  setSelectedProduct={setSelectedProduct}/>
                </Route>
                <Route path="/shop/Guitars">
                  <Shop products={products} selectedType={'Guitars'}
                  setSelectedProduct={setSelectedProduct}/>
                </Route>
                <Route path="/shop/Keyboards">
                  <Shop products={products}
                  selectedType={'Keyboards and Synths'}
                  setSelectedProduct={setSelectedProduct}/>
                </Route>
                <Route path="/shop/Pedals">
                  <Shop products={products}
                  selectedType={'Pedals'}
                  setSelectedProduct={setSelectedProduct}/>
                </Route>
                <Route path="/shop">
                  <Shop products={products}
                  selectedType={'All'}
                  setSelectedProduct={setSelectedProduct}/>
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