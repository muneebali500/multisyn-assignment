import React from "react";

export default function ProductCard({ icon, text, number, arrowIcon }) {
  return (
    <div className="product-card">
      <div className="product-card__top">
        <span className="product-card__top--icon">{icon}</span>
        <span className="product-card__top--text"> {text} </span>
      </div>
      <div className="product-card__bottom">
        <span className="product-card__bottom--number">{number}</span>
        <span className="product-card__bottom--icon">{arrowIcon}</span>
      </div>
    </div>
  );
}
