import React, { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

const Cart = ({ show, selectedProducts, onClose, onRemoveProduct }) => {
    const calculateTotalPrice = () => {
        return selectedProducts.reduce((total, product) => total + product.price, 0);
    };

    const totalPrice = calculateTotalPrice();

    const handleDeleteProduct = (product) => {
        onRemoveProduct(product);
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>Cart</Modal.Title>

            </Modal.Header>
            <Modal.Body >
                {selectedProducts && selectedProducts.length > 0 ? (
                    <Container fluid>
                        <Row>
                            <Col md={12}>
                                <div className="cart-products-container">
                                    {selectedProducts.map((product) => (
                                        <div key={product.id} className="cart-product-card">
                                            <div className="productImageFrame">
                                                <img
                                                    src={product.urlimage}
                                                    alt={product.name}
                                                    className="cart-product-image"
                                                />
                                            </div>
                                            <p className="cart-product-prices">${product.price}</p>
                                            <div className="deleteFromCart">
                                                <button
                                                    onClick={() => handleDeleteProduct(product)}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <p style={{position: 'absolute', left: "10px", padding: '10px', backgroundColor: 'black',
                    borderRadius: '5px', boxShadow: '0 0 5px rgb(0, 0, 0, 0.2', color: 'white'}}>
                    sum: ${totalPrice}
                </p>

                <Button style={{transform: "none"}} variant="secondary" onClick={onClose}>
                    ✖
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Cart;

