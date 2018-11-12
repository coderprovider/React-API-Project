import React from 'react';

const Header = props =>
  <header>
    <div>
      <h1>Finding Rubies</h1>
      <h2>Gems for the Body, Mind, and Soul</h2>
    </div>
    <div>
      <ul className="main-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  </header>

  export default Header;
