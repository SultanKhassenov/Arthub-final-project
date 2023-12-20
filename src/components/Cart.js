import React, { useState } from "react";
import "../styles/Products.css";

function Cart({ products }) {
  const [cartProducts, setCartProducts] = useState(products);
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };
  const totalPrice = calculateTotalPrice();

  const handleDeleteProduct = (producta) => {
    const indexToRemove = cartProducts.findIndex(
      (product) => product.id === producta.id
    );
    if (indexToRemove !== -1) {
      const updatedItems = [...cartProducts];
      updatedItems.splice(indexToRemove, 1);
      setCartProducts(updatedItems);
    }
  };

  return (
    <body>
      <div style={{marginTop: '60px'}}>
        <div className="products-container">
          {cartProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.urlimage}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <a href={product.url}>
                  <h3>{product.name}</h3>
                </a>
              </div>
                <p className="product-prices">● ${product.price}</p>
              <button onClick={() => handleDeleteProduct(product)}>
                  Delete
                </button>
            </div>
          ))}
        </div>
        <h1>Total price: ${totalPrice}</h1>
      </div>
    </body>
  );
}

export default Cart;
