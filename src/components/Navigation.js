import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        Math Magicians
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/DisplayQuotes">Quotes</Link></li>
      </ul>
    </nav>
  );
}
