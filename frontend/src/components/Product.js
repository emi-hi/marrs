
import React from "react";
import { useParams } from 'react-router-dom';


export default function Product(props) {

  const { products } = props
  const { productId } = useParams();
  const selectedProducts = products.filter(each => parseInt(each.id)=== parseInt(productId))
  const selectedProduct = selectedProducts[0]

  if (!selectedProduct) {
    return (
      <h4>searching products...</h4>
    )
  } 
  const imageMap =  selectedProduct.images.map((image) => {
    return (
      <img id="product-main-pic" key={image.id} src={image.image} alt={selectedProduct.title}/>
    )})  
  return (
    <div id="selected-product">

      <div className="row" id="product-main">
        <div className="col-7" id="product-image">
          {imageMap}
        </div>
        <div className="col-5" id="product-text">
          <h3>{selectedProduct.title}</h3>
          <h5 id="price">${selectedProduct.price}</h5>
          <p id="description">{selectedProduct.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    )
}
