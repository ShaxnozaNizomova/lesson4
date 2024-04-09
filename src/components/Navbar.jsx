import React, { useState } from 'react';
import '../components/Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
  
    return (
      <nav className="navbar">
        <div className="logo">грузовик</div>
        <button className="sidebar-toggle" onClick={toggleLinks}>
          ☰
        </button>
        <ul className={`nav-links ${showLinks ? 'show' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;