import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
      <div className="icons">
        <span>🔍</span>
        <span>❤️</span>
        <span>👤</span>
        <span>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
