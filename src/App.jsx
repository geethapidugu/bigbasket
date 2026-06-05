import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Cart from "./Cart";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Orders from "./Orders";
import Contactus from "./Contactus"
import Register from "./Register";
import Login from "./Login";
import Juices from "./Jucies";
import Account from "./Account";
import Header from "./Header";
function App() {
  
  
  const cartItems = useSelector(state => state.cart);
  const nonvegItems = useSelector(state => state.nonveg);
  const chocolateItems = useSelector(state => state.chocolate);

  const vegQty = cartItems.reduce(
    (total, item) => total + item.quantity,0);

  const nonvegQty = nonvegItems.reduce(
    (total, item) => total + item.quantity,0);

  const chocolateQty = chocolateItems.reduce(
    (total, item) => total + item.quantity,0);

  const totalQty = vegQty + nonvegQty + chocolateQty;

  return (
    <BrowserRouter>

      <header className="header">

        <h1 className="logo" style={{ color: "white" }}>
          🍽️ FoodHub
        </h1>

        <nav className="navbar">

          <NavLink to="/" end>
            <i className="fa-solid fa-house"></i> Home
          </NavLink>

          <NavLink to="/veg">
            <i className="fa-solid fa-carrot"></i> Veg
          </NavLink>

          <NavLink to="/nonveg">
            <i className="fa-solid fa-drumstick-bite"></i> Nonveg
          </NavLink>

          {/* <NavLink to="/milk">
            <i className="fa-solid fa-mug-hot"></i> Milk
          </NavLink> */}

          <NavLink to="/chocolate">
            <i className="fa-solid fa-cookie"></i> Chocolate
          </NavLink>

{/*           
          <NavLink to="/jucies">
            <i className="fa-solid fa-cookie"></i> Jucies
          </NavLink> */}

          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart {totalQty}
          </NavLink>
<NavLink to="/orders">
             Orders
          </NavLink>
          <NavLink to="/contactus">
            <i class="fa-solid fa-phone"></i> Contactus
          </NavLink>
             {/* <NavLink to="/register">
             Register
          </NavLink>
           <NavLink to="/login">
             Login
          </NavLink> */}
           <NavLink to="/account">
             Account
          </NavLink>
        </nav>

      </header>

      <main className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          {/* <Route path="/milk" element={<Milk />} /> */}
          <Route path="/chocolate" element={<Chocolate />} />
           {/* <Route path="/jucies" element={<Juices />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contactus" element={<Contactus />} />
         {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
            <Route path="/account" element={<Account />} />
        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;

