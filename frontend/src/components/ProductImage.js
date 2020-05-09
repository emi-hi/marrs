
import React from "react";



export default function ProductImage(props) {
  const { images, title, setMainImage } = props
  const imageMap =  images.map((image) => {
    return (
      <span key={image.id} id="thumbnail" className="col-sm-2">
        <img id="product-images" key={image.id} src={image.image} active={true} alt={title} onClick={()=>setMainImage(image.image)}/>
      </span>
    )})  
return(
  <div>
    <div className="row">
    {imageMap}
    </div>
  </div>
)
}
