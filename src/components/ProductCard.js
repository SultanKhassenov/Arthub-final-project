import React, { useState } from "react";

function ProductCard({ products, addProduct }) {
  const handleAddProduct = (id, name, price, image, url) => {
    const newProduct = { id, name, price, url, image };
    onAddProduct3(newProduct);
  };
  const onAddProduct3 = addProduct;


  return (
    <div className="products-container">
        {products.map((product) => (
            <div key={product.id} className="product-card">
                <p className="product-prices">${product.price} </p>
                <div className="productImageFrame">
                    <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-details">
                    <a href={product.url}>
                        <p>{product.name}</p>
                    </a>
                    <button className="addToCart" onClick={() =>
                        handleAddProduct(product.id, product.name, product.price, product.image, product.url)}
                        style={{ cursor: "pointer" }}
                    >+</button>
                </div>
            </div>
        ))}
    </div>
  );
}
export default ProductCard;

