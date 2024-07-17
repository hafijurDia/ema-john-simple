import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="nav-wrap">
        <a href="/"><img src={logo} alt="" /></a>
        <div className="menu">
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
