
import React from "react";



export default function ProductImage(props) {
  const { imagePath, imageId } = props
return(
  <img src={imagePath} alt="photograph" key={imageId} />
)
}
