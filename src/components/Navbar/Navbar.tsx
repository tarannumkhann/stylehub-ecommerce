import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  User,
} from "lucide-react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/Logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <div className="logo-circle">
            <img src={logo} alt="StyleHub Logo" />
          </div>

          <span>StyleHub</span>
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* LOGIN */}
        <Link to="/login" className="login-btn">
          <User size={18} />
          <span>Login</span>
        </Link>

        {/* CART */}
        <Link to="/cart" className="cart-icon">
          <ShoppingCart size={22} />
          <span>0</span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
  <div className="mobile-menu">

    <div className="mobile-search-box">
      <Search size={18} />
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    <Link to="/about" onClick={() => setMenuOpen(false)}>
      About
    </Link>

    <Link to="/products" onClick={() => setMenuOpen(false)}>
      Products
    </Link>

    <Link
      to="/login"
      className="mobile-login"
      onClick={() => setMenuOpen(false)}
    >
      <User size={18} />
      Login
    </Link>

  </div>
)}

    </nav>
  );
}

export default Navbar;