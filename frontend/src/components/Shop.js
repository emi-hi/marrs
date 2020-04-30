
import React from "react";



export default function Shop(props) {
  const { products, selectedType } = props
  const showProducts = products.map((product) => {
    if (product.product_type.name === selectedType || selectedType === 'All') {
      return ( 
      <div className="col-sm-3" key={product.id}> 
        <div className="product-image-box">
        </div>
        <h5>{product.title}</h5>
        <h5>${product.price}</h5>
        {/* <p>{product.description}</p> */}
      </div>)
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