import React, { useState } from "react";

function ProductCard({ products, addItem }) {
  const handleAddItem = (id, name, price, urlimage, url) => {
    const newItem = { id, name, price, url, urlimage };
    onAdditem3(newItem);
    console.log(newItem);
  };
  const onAdditem3 = (Item) => {
    addItem(Item);
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <p className="product-prices">
            ● ${product.price}
          </p>
          <div className="productImageFrame">
            <img
              src={product.urlimage}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-details">
            <a href={product.url}>
              <p>{product.name}</p>
            </a>
            <button
            className="addToCart"
            onClick={() =>
              handleAddItem(
                product.id,
                product.name,
                product.price,
                product.urlimage,
                product.url
              )
            }
            style={{ cursor: "pointer" }}
          >+</button>
          </div>
          
          
        </div>
      ))}
    </div>
  );
}
export default ProductCard;
