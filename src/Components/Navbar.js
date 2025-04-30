import React from "react";
import "./Navbar.css";
import Logo from "../assets/Logo.png";
import {
  FaSearch,
  FaHeart,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
      <div className="navbar-icons">
        <FaSearch className="icon" />
        <FaHeart className="icon" />
        <FaUserCircle className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
