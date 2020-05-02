
import React from "react";



export default function Product(props) {
  const { selectedProduct } = props
  console.log(selectedProduct)

  const imageMap =  selectedProduct.images.map((image) => {

    return (
      <img src={image.image}/>
    )})

    
  return (
    <div>
      <h3>{selectedProduct.title}</h3>
      {imageMap}
      <h3>{selectedProduct.price}</h3>
      <h5>{selectedProduct.description}</h5>
    </div>
    )
}
