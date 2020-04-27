
import React from "react";



export default function Shop(props) {
  const { products, selectedType } = props
  const showProducts = products.map((product) => {
    if (product.product_type.name === selectedType || selectedType === '') {
      return ( 
      <span key={product.id}> 
        <img src={product.image} alt="photograph" />
        <h4>${product.price} - {product.title}</h4>
        <p>{product.description}</p>
      </span>)
    }
  });
  return (
    <div>
      {showProducts}
    </div>
  )

};