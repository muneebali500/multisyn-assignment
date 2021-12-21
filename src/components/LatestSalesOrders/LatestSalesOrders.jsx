import React from "react";

import { latestSalesDetails } from "../../data";

export default function LatestSalesOrders() {
  return (
    <div className="latest-sales">
      <div className="latest-sales__title-wrapper">
        <h2>Latest sales orders - By sales channels</h2>
        <div>
          <h3>Ecwid</h3>
          <button>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div className="latest-sales__status">
        <form>
          <label>Search</label>
          <div className="input-group">
            <input type="text" defaultValue="S000083" />
            <i className="fas fa-search search-icon"></i>
          </div>
        </form>

        <div className="latest-sales__status-check">
          <button>All</button>
          <button>Open</button>
          <button>Completed</button>
          <button>Fulfilled</button>
        </div>
      </div>

      <div className="latest-sales__details">
        <div className="latest-sales__details-heading">
          <h4>Order ID</h4>
          <h4>Customer</h4>
          <h4>Fulfillment status</h4>
          <h4>Payment status</h4>
          <h4>Total</h4>
        </div>

        {latestSalesDetails.map((sale) => {
          const {
            id,
            orderId,
            customer,
            fulfillmentStatus,
            paymentStatus,
            total,
          } = sale;
          return (
            <div className="latest-sales__details-data" key={id}>
              <span className="orderId">{orderId}</span>
              <span>{customer}</span>
              <span>{fulfillmentStatus}</span>
              <span>{paymentStatus}</span>
              <span className="total">
                <strong>{total}</strong>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
