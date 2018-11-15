import React from 'react';
import { NavLink } from 'react-router-dom';

// Header Component with blog name, slogan, and nav
const Header = props =>
  <header>
    <div>
      <h1>Finding Rubies</h1>
      <h2>Gems for the Body, Mind, and Soul</h2>
    </div>
    <div>
      <ul className="main-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </header>

  export default Header;
