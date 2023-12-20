import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./components/Store";
import MyNavbar from "./components/MyNavbar";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (Item) => {
    const newItem = {
      id: Item.id,
      name: Item.name,
      price: Item.price,
      urlimage: Item.urlimage,
      url: Item.url,
    };

    setItems([...items, newItem]);
  };

  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path="/cart" element={<Cart products={items} />} />
        <Route path="/store" element={<Store addItem={addItem} />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
