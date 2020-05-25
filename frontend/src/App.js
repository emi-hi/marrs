import React, { useState, useEffect } from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import './css/App.scss';
import './css/Shop.scss';
import './css/Shop-product.scss';
import Home from './components/Home'
import Shop from './components/Shop'
import Repairs from './components/Repairs'
import Consign from './components/Consign'
import Studio from './components/Studio'
import Product from './components/Product'
import axios from 'axios'
import ROUTES_PRODUCTS from './routes/Products'
import Header from './components/Header'
import history from './history';
function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})
  const [featuredItems, setFeaturedItems] = useState([])


  const axiosSearch = (searchValue) => {
    axios.get(`/api/product?search=${searchValue}`)
    .then((response) => {
      console.log("*******************************")
      console.log(response)
      setProducts(response.data)
      }
    )
  }

  const refreshProducts = () => {
    setLoading(true)
    axios.all([
      axios.get(`/api/product`),
      axios.get(`/api/featured-product`),
    ])
    .then(axios.spread((productsRes, featuredRes) => (
      setProducts(productsRes.data),
      setFeaturedItems(featuredRes.data),
      setLoading(false)
      )
    ))
    .catch(error => {console.log(error)})
  }



  useEffect(() => {
    refreshProducts()
  },[])


  if (loading) {
    return (<p>...loading</p>);
  }
  return (
    <Router history={history}>
      <div className="application">
          <Header />
          <main className="app-main">
              <Switch>
                <Route exact path="/">
                  <Home
                  featuredItems={featuredItems}
                  setSelectedProduct={setSelectedProduct}
                  />
                </Route>
                <Route exact path={ROUTES_PRODUCTS.DETAIL}
                  render={() => <Product selectedProduct={selectedProduct} products={products} setProducts={setProducts} loading={loading}/>}
              />
               <Route path={ROUTES_PRODUCTS.LIST}
                  render={() => <Shop
                  products={products} 
                  setSelectedProduct={setSelectedProduct}
                  loading={loading}
                  axiosSearch={axiosSearch}
                   />}
              />
              <Route exact path = '/shop/' render={() => 
              <Shop
              products={products}
              setSelectedProduct={setSelectedProduct}
              setProducts={setProducts}
              loading={loading}
              axiosSearch={axiosSearch}
              />} 
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