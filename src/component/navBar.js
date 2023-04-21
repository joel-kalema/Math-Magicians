import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      <li><Link to="/">Calculator</Link></li>
      <li><Link to="/calculator">About</Link></li>
      <li><Link to="/quote">Quotes</Link></li>
    </ul>
  </nav>
);

export default Nav;
