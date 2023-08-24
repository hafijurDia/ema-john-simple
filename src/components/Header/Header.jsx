import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <div className="nav-wrap">
        <a href="/"><img src={logo} alt="" /></a>
        <div className="menu">
            <a href="/orders">Orders</a>
            <a href="/order-review">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
