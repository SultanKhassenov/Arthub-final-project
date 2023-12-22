import React, { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar({ filterProductsByCategory, resetProducts }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        filterProductsByCategory(category);
    };

    const handleResetClick = () => {
        setSelectedCategory(null);
        resetProducts();
    };

    return (
        <div className="sidebar">
            <button className={`categories category ${selectedCategory === "Watercolour" ? "selected" : ""}`}
                onClick={() => handleCategoryClick("Watercolour")}>
                <a href="#">Watercolour Paints</a>
            </button>
            <button className={`categories category ${selectedCategory === "Oil" ? "selected" : ""}`}
                onClick={() => handleCategoryClick("Oil")}>
                <a href="#">Oil Paints</a>
            </button>
            <button className={`categories category ${selectedCategory === "Acrylic" ? "selected" : ""}`}
                 onClick={() => handleCategoryClick("Acrylic")}>
                <a href="#">Acrylic Paints</a>
            </button>
            <button className={`categories category ${selectedCategory === "PnP" ? "selected" : ""}`}
                 onClick={() => handleCategoryClick("PnP")}>
                <a href="#">Paper and Pads</a>
            </button>
            <button className={`categories category ${selectedCategory === "Canvas" ? "selected" : ""}`}
                 onClick={() => handleCategoryClick("Canvas")}>
                <a href="#">Canvas</a>
            </button>
            <button className={`categories category ${selectedCategory === "Easels" ? "selected" : ""}`}
                 onClick={() => handleCategoryClick("Easels")}>
                <a href="#">Artist's Easels</a>
            </button>
            <button className={`categories category ${selectedCategory === "Pencil" ? "selected" : ""}`}
                 onClick={() => handleCategoryClick("Pencil")}>
                <a href="#">Artists Pencils</a>
            </button>
            <button className={`categories category ${selectedCategory === "Spray" ? "selected" : ""}`}
                 onClick={() => handleCategoryClick("Spray")}>
                <a href="#">Spray Paints</a>
            </button>
                <button className={'reset-btn'} onClick={handleResetClick}>✖</button>
        </div>
    );
}

export default Sidebar;
