import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
        <nav>
            <NavLink to="/home" className="nav-item">Home</NavLink>
            <span>|</span>
            <NavLink to="/about" className="nav-item">About</NavLink>
            <span>|</span>
            <NavLink to="/legal-notice" className="nav-item">Legal Notice</NavLink>
        </nav>
    </div>
  );
}

export default Nav;