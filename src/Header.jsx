import { useState } from "react";

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <header className="header"> <div className="logo">BigBasket</div>

  <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </div>

  <nav className={`navbar ${menuOpen ? "active" : ""}`}>
    <a href="/">Home</a>
    <a href="/veg">Veg</a>
    <a href="/nonveg">Non Veg</a>
    <a href="/cart">Cart</a>
    <a href="/login">Login</a>
  </nav>
</header>

);
}

export default Header;
