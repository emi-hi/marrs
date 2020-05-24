
import React from "react";
import { useParams } from 'react-router-dom';
import ProductMainImage from './ProductMainImage'
import classNames from "classnames"

export default function Product(props) {
  
  const { products } = props;
  const { productId } = useParams();

  const selectedProducts = products.filter(each => parseInt(each.id)=== parseInt(productId));
  const selectedProduct = selectedProducts[0];
  

  if (!selectedProduct) {
    return (
      <h4>searching products...</h4>
    )
  } 
  const productSaleStatus = classNames("product-status", {
    "product-status-available": selectedProduct.sale_status.comment === "for sale",
    "product-status-reserved": selectedProduct.sale_status.comment === "reserved",
    "product-status-sold": selectedProduct.sale_status.comment === "sold"
  })

  return (
    <div id="selected-product">
      <div className="row" id="product-main">
        <div className="col-sm-8" id="product-image">
          <ProductMainImage selectedProduct={selectedProduct}/>
        </div>
        <div className="col-sm-4" id="product-text">
          <h4 className={productSaleStatus}>{selectedProduct.sale_status.comment==="for sale"? "":
          selectedProduct.sale_status.comment==="sold"?" <SOLD> " : " <ON HOLD> "}{selectedProduct.title}</h4>
          <h5 id="price" className={productSaleStatus}>${selectedProduct.price}</h5>
          <p id="description">{selectedProduct.description}</p>
          {selectedProduct.sale_status.comment !== "sold" &&
          <div className="purchase-contact">
            <h6>
            For purchase please email julian.marrsaudio@gmail.com or call/text 778.928.4574
            </h6>
          </div>}
        </div>
      </div>
      
    </div>
    )
}
