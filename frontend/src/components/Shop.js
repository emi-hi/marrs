
import React from "react";
import history from '../history'
import { useParams } from 'react-router-dom';

export default function Shop(props) {
  
  const { products,  setSelectedProduct } = props
  const { type } = useParams();
  
  const showProducts = products.map((product) => {
    if (product.product_type.name.toUpperCase() === type.toUpperCase() || type === '' ){
      const firstImage = product.images.length > 0 ? product.images[0].image : '/images/testguitar.jpg'
      return ( 
        
        <div className="col-sm-3" id="each-product" key={product.id}
        onClick={()=>{
        setSelectedProduct(product)
        history.push(`${product.product_type.name}/${product.id}`)}}>
        <div className="product-image-box">
         <img id="thumbnail-product" src={firstImage} />
        </div>
        <h5>{product.title}</h5>
        <h5 id="price">${product.price}</h5>
      </div>

      )
    } else {
      return ''
    }
  });
  return (
    <div className="shop">
      <div className="row">
        {showProducts}
      </div>
    </div>
  )

};