import React from "react";

export default function PurchaseCard({ icon, number, name, price }) {
  return (
    <div className="purchase-order">
      <span className="purchase-order__icon icon">{icon}</span>
      <div className="purchase-order__desc">
        <span className="purchase-order__number">{number}</span>
        <span className="purchase-order__name">{name}</span>
      </div>
      <span className="purchase-order__price">${price}</span>
    </div>
  );
}
