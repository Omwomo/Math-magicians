import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        Math Magicians
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quotes</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
