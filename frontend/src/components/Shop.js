
import React, { useState } from "react";
import history from '../history'
import { useParams } from 'react-router-dom';
import classNames from "classnames"

export default function Shop(props) {
  const { products, setSelectedProduct, loading, axiosSearch } = props
  const [searchTerm, setSearchTerm] = useState("")
  const [search, setSearch] = useState(false)
  const { type } = useParams();
  
  const showProducts = products.map((product) => {
    if (!type || product.product_type.name.toUpperCase() === type.toUpperCase()){
      const firstImage = product.images.length > 0 ? product.images[0].image : '/images/no-image.jpg'
      const productSaleStatus = classNames("product-status", {
        "product-status-available": product.sale_status.comment === "for sale",
        "product-status-reserved": product.sale_status.comment === "reserved",
        "product-status-sold": product.sale_status.comment === "sold"
      })
    
    
      return ( 
        <div className="col-lg-3" id="each-product" key={product.id}
          onClick={()=>{
          setSelectedProduct(product)
          history.push(`${product.product_type.name}/${product.id}`)}}>
          <div className="product-image-box">
            <img id="thumbnail-product" src={firstImage} alt={product.title} />
          </div>
          <p className={productSaleStatus}>{product.sale_status.comment==="for sale"? "":
          product.sale_status.comment==="sold"?" <SOLD> " : " <ON HOLD> "}{product.title}</p>
          <p id="price" className={productSaleStatus}>${product.price}</p>
        </div>

      )
    } else {
      return ''
    }
  });
  const showSearch = () => {
    setSearch(true)
  }

  const handleSubmit = () => {
      axiosSearch(searchTerm)
  };
  const keyPressed = (event) => {
      if (event.key === "Enter") {
        handleSubmit(searchTerm)
      }
  }

  const handleInputChange = (event) => {
      const { value } = event.target;
      setSearchTerm(value)
    }
  if (loading) {
    return (<p>loading...</p>)
  }
  return (
    <div className="shop">
      <h4>{type}</h4>
      <div id="search-bar">
        {!search && 
        <button
        className="btn"
        id="search-button"
        type="submit"
        onClick={()=>showSearch()}
        >
          <i className="fas fa-search" id="magnifier" aria-hidden="true"></i>
        </button>
      }
        {search === true &&
          <div className="row">
            <input 
            type="search"
            className="form-control form-control-sm ml-3 w-75"
            id="search-input"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInputChange}
            onKeyPress={keyPressed}
            />
            <button
            className="btn"
            id="search-button"
            type="submit"
            onClick={()=>handleSubmit()}
            >
              <i className="fas fa-search" id="magnifier" aria-hidden="true"></i>
            </button>
          </div>
        }
            </div>
      <div className="row row-no-gutters">
        {products.length > 0? showProducts: "Sorry, no products found"}
      </div>
    </div>
  )

};