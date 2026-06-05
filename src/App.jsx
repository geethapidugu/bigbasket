import React, { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Chocolate from "./Chocolate";
import Cart from "./Cart";
import Orders from "./Orders";
import Contactus from "./Contactus";
import Account from "./Account";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
const [menuOpen, setMenuOpen] = useState(false);

const cartItems = useSelector((state) => state.cart);
const nonvegItems = useSelector((state) => state.nonveg);
const chocolateItems = useSelector((state) => state.chocolate);

const vegQty = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

const nonvegQty = nonvegItems.reduce(
(total, item) => total + item.quantity,
0
);

const chocolateQty = chocolateItems.reduce(
(total, item) => total + item.quantity,
0
);

const totalQty = vegQty + nonvegQty + chocolateQty;

return ( <BrowserRouter> <header className="header">
<h1 className="logo" style={{ color: "white" }}>
🍽️ FoodHub </h1>


    {/* Mobile Toggle Button */}
    <div
      className="menu-icon"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <i className="fa-solid fa-bars"></i>
    </div>

    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <NavLink to="/" end>
        <i className="fa-solid fa-house"></i> Home
      </NavLink>

      <NavLink to="/veg">
        <i className="fa-solid fa-carrot"></i> Veg
      </NavLink>

      <NavLink to="/nonveg">
        <i className="fa-solid fa-drumstick-bite"></i> Nonveg
      </NavLink>

      <NavLink to="/chocolate">
        <i className="fa-solid fa-cookie"></i> Chocolate
      </NavLink>

      <NavLink to="/cart">
        <i className="fa-solid fa-cart-shopping"></i> Cart {totalQty}
      </NavLink>

      <NavLink to="/orders">
        Orders
      </NavLink>

      <NavLink to="/contactus">
        <i className="fa-solid fa-phone"></i> Contactus
      </NavLink>

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
      <Route path="/chocolate" element={<Chocolate />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </main>
</BrowserRouter>

);
}

export default App;
