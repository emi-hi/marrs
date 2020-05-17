
import React from "react";

export default function ProductImagesRow(props) {
  const { images, title, setMainImage } = props
  const imageMap =  images.map((image) => {
    return (
        <img id="product-images" key={image.id} src={image.image} active={true} alt={title} onClick={()=>setMainImage(image.image)}/>
    )})  
return(
  <div>
    <div className="row" id="thumbnail-row">
    {imageMap}
    </div>
  </div>
)
}
