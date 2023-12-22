import React from "react";
import ProductCard from "./ProductCard";

function Products({ products, onAddProduct }) {
    const onAddProduct2 = (Product) => {
        onAddProduct(Product);
    };


    return (
        <body style={{backgroundColor: 'white'}}>
            <ProductCard products={products} addProduct={onAddProduct2} />;
        </body>
    )
}


export default Products;
