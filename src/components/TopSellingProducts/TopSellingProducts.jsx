import React from "react";
import { topSellingProducts } from "../../data";
import Product from "./Product";

export default function TopSellingProducts() {
  return (
    <div className="top-products">
      <h2>Top Selling Products</h2>

      <div className="top-products__container">
        {topSellingProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
