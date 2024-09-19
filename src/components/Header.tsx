import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // CSS dosyasının yolu

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/interior">Interior</Link>
      <Link to="/digital">Digital</Link>
      <Link to="/art">Art</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
