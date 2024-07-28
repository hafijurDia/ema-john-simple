import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
    .then(result => {})
  }
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
            {user &&  <span style={{color:"#ffffff", padding:"0px 10px"}}>Welcome {user.email} <button className="login-logout" onClick={handleLogout}>Logout</button></span>}
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
