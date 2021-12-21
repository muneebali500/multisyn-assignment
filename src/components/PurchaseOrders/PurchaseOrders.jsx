import React from "react";

import { purchaseOrders } from "../../data";
import PurchaseCard from "./PurchaseCard";

export default function PurchaseOrders() {
  return (
    <div className="purchase-orders">
      <h2 className="purchase-orders__title">Purchase Orders</h2>
      <p>
        Received orders <span>$20</span>
      </p>
      <p>
        Total cost (USD) <span>$4600</span>
      </p>
      <p className="line"></p>

      <div className="purchase-orders__details">
        <h3>Incoming purchase orders</h3>

        {purchaseOrders.map((order) => (
          <PurchaseCard {...order} key={order.id} />
        ))}
      </div>

      <button className="purchase-orders__details-link">View All</button>
    </div>
  );
}
