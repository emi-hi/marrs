
import React from "react";
import { useParams } from 'react-router-dom';


export default function Product(props) {

  const { products } = props
  const { type, productId } = useParams();
  const selectedProducts = products.filter(each => each.id == productId)
  const selectedProduct = selectedProducts[0]

  if (!selectedProduct) {
    return (
      <h4>searching products...</h4>
    )
  } 
  const imageMap =  selectedProduct.images.map((image) => {
    return (
      <img src={image.image}/>
    )})  
  return (
    <div>
      <h3>{selectedProduct.title}</h3>
      {imageMap}
      <h3>${selectedProduct.price}</h3>
      <h5>{selectedProduct.description}</h5>
    </div>
    )
}
