
import React from "react";



export default function Shop(props) {
  const { products, selectedType } = props
  const showProducts = products.map((product) => {
    if (product.product_type.name === selectedType || selectedType === 'All') {
      return ( 
      <article className="col" key={product.id}> 
        <div className="product-image-box">
        </div>
        <h4>${product.price} - {product.title}</h4>
        <p>{product.description}</p>
      </article>)
    }
    else {
      return
    }
  });
  return (
    <div className="row">
      {showProducts}
    </div>
  )

};