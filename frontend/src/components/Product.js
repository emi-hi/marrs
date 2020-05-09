
import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage'

export default function Product(props) {

  const { products } = props;
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState('');
  const selectedProducts = products.filter(each => parseInt(each.id)=== parseInt(productId));
  const selectedProduct = selectedProducts[0];
  const firstImage = selectedProduct.images[0].image;
  
  if (!selectedProduct) {
    return (
      <h4>searching products...</h4>
    )
  } 
  
  return (
    <div id="selected-product">

      <div className="row" id="product-main">
        <div className="col-sm-7" id="product-image">
          <div className="main-image-container">
            <img id="main-image" src={mainImage? mainImage : firstImage}/>
          </div>
         
        </div>
        <div className="col-sm-5" id="product-text">
          <h4>{selectedProduct.title}</h4>
          <h5 id="price">${selectedProduct.price}</h5>
          <p id="description">{selectedProduct.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <ProductImage images={selectedProduct.images} title={selectedProduct.title} setMainImage={setMainImage} />
    </div>
    )
}
