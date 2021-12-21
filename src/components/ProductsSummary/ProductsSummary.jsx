import React from "react";

import { productsSummary } from "../../data";
import ProductCard from "./ProductCard";

export default function ProductsSummary() {
  return (
    <section className="products-summary">
      {productsSummary.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </section>
  );
}
