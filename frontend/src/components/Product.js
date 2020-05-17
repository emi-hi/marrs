
import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage'

export default function Product(props) {
  
  const { products } = props;
  const { productId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [mainImage, setMainImage] = useState('');
  const selectedProducts = products.filter(each => parseInt(each.id)=== parseInt(productId));
  const selectedProduct = selectedProducts[0];
  const firstImage = selectedProduct.images[0]? selectedProduct.images[0].image :  '/images/no-image.jpg';
  
  if (!selectedProduct) {
    return (
      <h4>searching products...</h4>
    )
  } 
  const showProductImage = () => {
    return (
<ProductImage images={selectedProduct.images} title={selectedProduct.title} setMainImage={setMainImage} />
    )
  }

  // const modal = (
  //   <div id="product-modal" className="modal" tabIndex="-1" role="dialog" style={showModal ? { display: 'block' } : { display: 'none' }}>
  //     <div className="modal-dialog" role="document">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title">{selectedProduct.name}</h5>
  //           <button
  //             type="button"
  //             className="close"
  //             data-dismiss="modal"
  //             aria-label="Close"
  //             onClick={() => {
  //               setShowModal(false);
  //             }}>
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //         <div className="modal-body">
  //         <img id="main-image"
  //           src={mainImage? mainImage : firstImage}
  //         />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div id="selected-product">

      <div className="row" id="product-main">
        {/* {modal} */}
        <div className="col-sm-7" id="product-image">
          <div className="main-image-container">
            <img id="main-image"
            src={mainImage? mainImage : firstImage}
            />
            {selectedProduct.images > 1 ? showProductImage : null }
          </div>
         
        </div>
        <div className="col-sm-5" id="product-text">
          <h4>{selectedProduct.title}</h4>
          <h5 id="price">${selectedProduct.price}</h5>
          <p id="description">{selectedProduct.description}</p>
        </div>
      </div>
      
    </div>
    )
}
