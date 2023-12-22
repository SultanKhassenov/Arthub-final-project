import React, { useState } from "react";
import "../styles/CartLink.css";
import Cart from "./Cart";

const CartLink = ({ selectedProducts }) => {
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    return (
        <>
            <div>
                <button className="cart" variant="primary" onClick={handleShowCart}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                        alt="cart"
                        height="60px"
                        width="auto"
                    />
                </button>
            </div>
            <Cart
                show={showCart}
                selectedProducts={selectedProducts}
                onClose={handleCloseCart}
            />
        </>
    );
};

export default CartLink;
