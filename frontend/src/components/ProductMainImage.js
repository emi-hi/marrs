
import React, { useState } from "react";
import ProductImagesRow from './ProductImagesRow'
import {SideBySideMagnifier} from "react-image-magnifiers";
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
      <SideBySideMagnifier
        className="input-position"
        style={{ order:false}}
        imageSrc={mainImage? mainImage : firstImage}
        alwaysInPlace={true}
        overlayOpacity={.6}
        switchSides={false}
        zoomPosition="over"
        inPlaceMinBreakpoint={641}
        fillAvailableSpace={false}
        fillAlignTop={false}
        fillGapTop={10}
        fillGapRight={10}
        fillGapBottom={10}
        fillGapLeft={10}
        zoomContainerBorder="1px solid #ccc"
        zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
      />
      </div>
          {selectedProduct.images.length > 1 ? showProductImage() : null }
    </div>
    )
}
