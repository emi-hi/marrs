
import React from "react";
import { useParams } from 'react-router-dom';
import ProductMainImage from './ProductMainImage'

export default function Product(props) {
  
  const { products } = props;
  const { productId } = useParams();

  const selectedProducts = products.filter(each => parseInt(each.id)=== parseInt(productId));
  const selectedProduct = selectedProducts[0];
  

  if (!selectedProduct) {
    return (
      <h4>searching products...</h4>
    )
  } 

  return (
    <div id="selected-product">

      <div className="row" id="product-main">
        <div className="col-sm-7" id="product-image">
          <ProductMainImage selectedProduct={selectedProduct}/>
        </div>
        <div className="col-sm-5" id="product-text">
          <h4>{selectedProduct.title}</h4>
          <h5 id="price">${selectedProduct.price}</h5>
          <p id="description">{selectedProduct.description}</p>
        </div>
      </div>
      
    </div>
    )
}
