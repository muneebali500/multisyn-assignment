import React from "react";

export default function Product({ image, description, price }) {
  return (
    <div className="product">
      <figure className="product-photo">
        <img src={image} alt="" />
      </figure>
      <p className="product-description">{description}</p>
      <span className="product-price">{price}</span>
    </div>
  );
}
