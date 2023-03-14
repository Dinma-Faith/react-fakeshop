import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id} className="product-components">
        <div className="products-img-and-content">
          <div className="img-div">
            <img src={image} alt={title} />
          </div>

          <h5>{title}</h5>
          <h5>Amt: {price}</h5>
          <small>Type: {category}</small>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
