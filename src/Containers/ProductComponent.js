import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id} className="product-components">
        <Link to={`/product/${id}`}>
          <div className="products-img-and-content">
            <div className="img-div">
              <img src={image} alt={title} className="main-img" />
            </div>

            <div className="product-content">
              <h5>{title}</h5>
              <p>Amt: {price}</p>
              <small>Type: {category}</small>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
