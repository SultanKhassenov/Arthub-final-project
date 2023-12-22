import React, { useState } from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";
import CartLink from "./CartLink";
import Cart from "./Cart";
import "../styles/Products.css";

function Store() {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: "Daler-Rowney Aquafine Watercolour Studio Set",
        price: 39.95,
        image: "https://artdiscount.co.uk/cdn/shop/products/Daler-Rowney-Aquafine-Studio-set-48_300x.jpg?v=1645715154",
        category: "Watercolour",
      },
    {
        id: 2,
        name: "ARTdiscount Acrylic Paint 500ml bottles - Assorted Colours - Trial Pack of 6",
        price: 42.00,
        image: "https://artdiscount.co.uk/cdn/shop/products/AD-Trial_Pack_acrylic-paint_5000x.jpg?v=1681375936",
        category: "Acrylic",
    },
    {
        id: 3,
        name: "Winsor & Newton Watercolour Lightweight Sketchers Box 5ml Tube",
        price: 49.95,
        image: "https://artdiscount.co.uk/cdn/shop/products/Untitleddesign-2021-11-29T154739.307_5000x.jpg?v=1658406139",
        category: "Watercolour",
      },
    {
        id: 4,
        name: "Winsor & Newton Artisan Water Mixable Oil Colour tubes 37ml Series 1",
        price: 5.25,
        image: "https://artdiscount.co.uk/cdn/shop/products/W_N-ARTISAN-TUBE-37ML-PERMANENT-ROSE_8089c8c7-33fc-44d2-8b58-e30a1e43477d_5000x.jpg?v=1647356508",
        category: "Oil",
    },
    {
        id: 5,
        name: "ARTdiscount Wire-o Bound Hardback Sketchbook - 50 Sheets",
        price: 4.80,
        image: "https://artdiscount.co.uk/cdn/shop/files/Wiro_Sketchbook_400x.jpg?v=1691684206",
        category: "PnP"
      },
    {
        id: 6,
        name: "Bob Ross 2 in 1 Steel Easel - FREE Isomars A1 Art Storage Bag",
        price: 245,
        image: "https://artdiscount.co.uk/cdn/shop/products/bob-ross-2-1-easel_400x.jpg?v=1658226412",
        category: "Easels"
    },
    {
        id: 7,
        name: "Liquitex Spray Paint 400ml SERIES 1",
        price: 7.75,
        image: "https://artdiscount.co.uk/cdn/shop/files/Liquitex-spray-paint-series-1_400x.jpg?v=1683213238",
        category: "Spray",
      },
    {
        id: 16.89,
        name: "Bob Ross FLORAL Soft Oil Colours - Soft Titanium White - 200 ml",
        price: 1,
        image: "https://artdiscount.co.uk/cdn/shop/products/bob-ross-soft-oil-150ml_5000x.jpg?v=1652099840",
        category: "Oil",
    },
    {
        id: 9,
        name: "Montana - GLITTER EFFECT",
        price: 7.85,
        image: "https://artdiscount.co.uk/cdn/shop/products/glitter1_400x.jpg?v=1646920107",
        category: "Spray",
      },
    {
        id: 10,
        name: "ARTdiscount Economy Standard Canvases (Multi-Packs)",
        price: 6.2,
        image: "https://artdiscount.co.uk/cdn/shop/files/Eco_Canvas_Standard3_400x.jpg?v=1691490934",
        category: "Canvas",
    },
    {
        id: 11,
        name: "STUDIO HEAVY BODY ACRYLIC PAINTS - 200MLS TUBES",
        price: 4.96,
        image: "https://artdiscount.co.uk/cdn/shop/products/studio-heavy-body-acrylic-paint_1200x.jpg?v=1662479712",
        category: "Acrylic"
    },
    {
        id: 12,
        name: "Classic Wire-O Sketchbooks (Portrait)",
        price: 3.88,
        image: "https://artdiscount.co.uk/cdn/shop/files/Classic_Wire-O_1_400x.jpg?v=1693307685",
        category: "PnP",
    },
    {
        id: 13,
        name: "Winsor & Newton Cotman 12 Tube Watercolour Set",
        price: 19.85,
        image: "https://artdiscount.co.uk/cdn/shop/products/Untitleddesign-2021-11-03T141319.225_5000x.jpg?v=1639755674",
        category: "Watercolour",
    },
    {
        id: 14,
        name: "Daler-Rowney Watercolour Postcard Pad (A6) 12 Sheets (Not) 300gsm - The Langton\n",
        price: 13.95,
        image: "https://artdiscount.co.uk/cdn/shop/files/403330600-Langton-Postcard-CP-NOT-Pad_400x.jpg?v=1702311861",
        category: "PnP",
    },
    {
        id: 15,
        name: "Derwent Academy Wooden Box Set of Coloured Pencils",
        price: 26.45,
        image: "https://artdiscount.co.uk/cdn/shop/files/Academy_Wooden_Pencils_400x.jpg?v=1695655452",
        category: "Pencil",
    },
    {
        id: 16,
        name: "Daler-Rowney Langton Watercolour Pad 'NOT' (Cold Pressed)",
        price: 1,
        image: "https://artdiscount.co.uk/cdn/shop/files/Langton_NOT_Pad_1_400x.jpg?v=1695045814",
        category: "PnP",
    },
    {
        id: 17,
        name: "Seawhite A Frame Studio Easel",
        price: 65,
        image: "https://artdiscount.co.uk/cdn/shop/files/Seawhite_easel_400x.jpg?v=1700565510",
        category: "Easels",
    },
    {
        id: 18,
        name: "Mabef M06 Studio Easel - FREE Isomars A1 Art Storage Bag",
        price: 385,
        image: "https://artdiscount.co.uk/cdn/shop/files/Mabef_M06_Studio_Easel_1_400x.jpg?v=1697730703",
        category: "Easels",
    },
    {
        id: 19,
        name: "Caran d'Ache Supracolor 2 Soft Aquarelle Individual Pencil",
        price: 2.75,
        image: "https://artdiscount.co.uk/cdn/shop/files/Watercolour_Pencil_1_400x.jpg?v=1695918259",
        category: "Pencil",
    },
      {
          id: 20,
          name: "Daler-Rowney Graduate Oil Selection Set",
          price: 17.95,
          image: "https://artdiscount.co.uk/cdn/shop/products/grad-oil-sel-set_400x.jpg?v=1581597282",
          category: "Oil",
      },
      {
          id: 21,
          name: "ARTessentials Artists Wooden Panels (Multi Packs)",
          price: 5.41,
          image: "https://artdiscount.co.uk/cdn/shop/files/Wooden_Panel_1_2000x.jpg?v=1691743302",
          category: "Canvas",
      },
      {
          id: 22,
          name: "Faber-Castell Polychromos Set of 120",
          price: 159,
          image: "https://artdiscount.co.uk/cdn/shop/files/Polychromos_120_2_1_400x.jpg?v=1700827891",
          category: "Pencil",
      },
      {
          id: 23,
          name: "Winsor & Newton Galeria 10 Tube Set - 60ml",
          price: 15.35,
          image: "https://artdiscount.co.uk/cdn/shop/products/galeria-1_d3c9de00-aa38-40d9-91cc-eec3d618cb40_400x.jpg?v=1591086929",
          category: "Acrylic",
      },
      {
          id: 24,
          name: "Montana spray Cans 400ml - Chalk Sprays",
          price: 9.95,
          image: "https://artdiscount.co.uk/cdn/shop/products/Chalk-400ml_400x.jpg?v=1581598197",
          category: "Spray",
      },
      {
          id: 25,
          name: "Daler-Rowney Langton Prestige Watercolour Block 140lb (300gsm)",
          price: 21.85,
          image: "https://artdiscount.co.uk/cdn/shop/files/Langton_6259526d-42bd-4bc5-b182-ebd8d02fabbb_400x.jpg?v=1694175552",
          category: "PnP",
      },
      {
          id: 26,
          name: "Faber-Castell Polychromos Individual Artists Colour Pencils (101 to 246)",
          price: 2.1,
          image: "https://artdiscount.co.uk/cdn/shop/files/Polychromos_1_300x.jpg?v=1696502664",
          category: "Pencil",
      },
      {
          id: 27,
          name: "Bob Ross Liquid Base Coats",
          price: 10.35,
          image: "https://artdiscount.co.uk/cdn/shop/files/Liquid_White_400x.jpg?v=1692108319",
          category: "Oil",
      },
      {
          id: 28,
          name: "Liquitex BASICS Acrylic - 118ml Tubes",
          price: 4.79,
          image: "https://artdiscount.co.uk/cdn/shop/products/liquitex-basics_400x.jpg?v=1647441827",
          category: "Acrylic",
      },
      {
          id: 29,
          name: "Mabef M02 Heavyweight Studio Easel",
          price: 989,
          image: "https://artdiscount.co.uk/cdn/shop/files/Mabef_M02_Heavyweight_Studio_Easel_1_300x.jpg?v=1697730787",
          category: "Easel",
      },
      {
          id: 30,
          name: "Winsor & Newton Artists Canvas Boards",
          price: 8.85,
          image: "https://artdiscount.co.uk/cdn/shop/products/Winsor_NewtonSquareArtistsCanvasBoards-Packsof2-2_400x.png?v=1601378809",
          category: "Canvas",
      },
  ]);

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const addProduct = (product) => {
        setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
    };

    const removeProduct = (product) => {
        setSelectedProducts((prevSelectedProducts) =>
            prevSelectedProducts.filter((prevProduct) => prevProduct.id !== product.id)
        );
    };

    const filterProductsByCategory = (category) => {
        setSelectedCategory(category);
    };

    const resetProducts = () => {
        setSelectedCategory(null);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div>
            <Sidebar filterProductsByCategory={filterProductsByCategory} resetProducts={resetProducts} />
            <CartLink selectedProducts={selectedProducts} />
            <Products products={filteredProducts} onAddProduct={addProduct} />
            <Cart selectedProducts={selectedProducts} onRemoveProduct={removeProduct} />
        </div>
    );
}

export default Store;
