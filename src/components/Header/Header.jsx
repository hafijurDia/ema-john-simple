import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <div className="nav-wrap">
        <img src={logo} alt="" />
        <div>
            <a href="/order">Order</a>
            <a href="/order-review">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
