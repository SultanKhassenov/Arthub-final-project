import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./components/Store";
import MyNavbar from "./components/MyNavbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import UserProfile from "./components/UserProfile";
import RegistrationForm from "./components/Registration";
import LoginForm from "./components/Login";

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  const addProduct = (Product) => {
    const newItem = {
      id: Product.id,
      name: Product.name,
      price: Product.price,
      urlimage: Product.urlimage,
      url: Product.url,
    };

    setItems([...items, newItem]);
  };

  const handleRegister = (newUser) => {
    setUser(newUser);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/cart" element={<Cart products={items} />} />
          <Route path="/store" element={<Store addProduct={addProduct} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/userProfile" element={<UserProfile user={user} />} />
          <Route path="/register" element={<RegistrationForm onRegister={handleRegister} onLogin={handleLogin} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
