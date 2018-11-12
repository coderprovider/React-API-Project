import React from 'react';
import { Link } from 'react-router-dom';

const Header = props =>
  <header>
    <div>
      <h1>Finding Rubies</h1>
      <h2>Gems for the Body, Mind, and Soul</h2>
    </div>
    <div>
      <ul className="main-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  </header>

  export default Header;
