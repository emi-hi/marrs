import React from "react";
import { useParams } from "react-router-dom";
import ProductMainImage from "./ProductMainImage";
import classNames from "classnames";
import ReactMarkdown from "react-markdown"

export default function Product(props) {
  const { products } = props;
  const { productId } = useParams();

  const selectedProducts = products.filter(
    (each) => parseInt(each.id) === parseInt(productId)
  );
  const selectedProduct = selectedProducts[0];

  if (!selectedProduct) {
    return <h2>searching products...</h2>;
  }

  const productSaleStatus = classNames("product-status", {
    "product-status-available":
      selectedProduct.sale_status.comment === "for sale",
    "product-status-reserved":
      selectedProduct.sale_status.comment === "reserved",
    "product-status-sold": selectedProduct.sale_status.comment === "sold",
  });
  // console.log(selectedProduct.price.slice(0, -3))
  return (
    <div id="selected-product">
      <div className="row" id="product-main">
        <div className="col-sm-8" id="product-image">
          <ProductMainImage selectedProduct={selectedProduct} />
        </div>
        <div className="col-sm-4" id="product-text">
          <h2 className={productSaleStatus}>
            {selectedProduct.sale_status.comment === "for sale"
              ? ""
              : selectedProduct.sale_status.comment === "sold"
              ? " <SOLD> "
              : " <ON HOLD> "}
            {selectedProduct.title}
          </h2>
          <div>
          <h3 id="price" className={productSaleStatus}>
            ${selectedProduct.price.slice(0, -3)} 
          </h3>
          <p id="plus-tax">+ applicable tax</p>
          </div>
          <ReactMarkdown className="product-description" source={selectedProduct.description} />
          {selectedProduct.sale_status.comment === "for sale" && (
            <div className="purchase-contact">
              <h6>
                For purchase please email 
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:julian.marrsaudio@gmail.com"
                > julian.marrsaudio@gmail.com
                </a> or call/text 
                <a href="tel:7789284574"> 778-928-4574</a>
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
