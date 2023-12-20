import React from "react";
import "../styles/Products.css";
import ProductCard from "./ProductCard";
function Products({ products, onAdditem }) {
  const onAdditem2 = (Item) => {
    onAdditem(Item);
  };
  return (
    <body>
      <div className="products">
        <ProductCard products={products} addItem={onAdditem2} />
      </div>
    </body>
  );
}

export default Products;
