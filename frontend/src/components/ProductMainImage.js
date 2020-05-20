
import React, { useState } from "react";
import ReactImageMagnify from 'react-image-magnify';
import ProductImagesRow from './ProductImagesRow'

export default function ProductMainImage(props) {
  const { selectedProduct } = props;
  const [mainImage, setMainImage] = useState('');
  const firstImage = selectedProduct.images[0]? selectedProduct.images[0].image :  '/images/no-image.jpg';
  
  const showProductImage = () => {
    return (
<ProductImagesRow images={selectedProduct.images} title={selectedProduct.title} setMainImage={setMainImage} />
    )
  }

  return (
    <div className="main-image-container">
      <div id="feature-image">
      <ReactImageMagnify {...{
          id: "main-image",
          smallImage: {
            alt: selectedProduct.title,
            isFluidWidth: true,
            src: mainImage? mainImage : firstImage,

          },
          largeImage: {
            src:  mainImage? mainImage : firstImage,
            width: '800',
            height: '800'
          },
          enlargedImagePosition: 'over',
          isHintEnabled: true
        }} />
      </div>
          {selectedProduct.images.length > 1 ? showProductImage() : null }
    </div>
    )
}
