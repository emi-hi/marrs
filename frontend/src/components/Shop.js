
import React from "react";
import history from '../history'

export default function Shop(props) {
  const { products, selectedType, setSelectedProduct } = props

  const showProducts = products.map((product) => {
    if (product.product_type.name === selectedType || selectedType === 'All') {
      return ( 
        <a
        onClick={()=>{
        setSelectedProduct(product)
        history.push(`${product.product_type.name}/${product.id}`)}}>
      <div className="col-sm-3" key={product.id}> 
        <div className="product-image-box">
        </div>
        <h5>{product.title}</h5>
        <h5>${product.price}</h5>
      </div>

      </a>)
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