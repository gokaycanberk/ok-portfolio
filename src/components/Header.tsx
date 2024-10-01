import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
const Header = () => {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/interior-design">Interior</Link>
      <Link to="/digital-design">Digital</Link>
      <Link to="/art">Art</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
