import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
        <nav>
            <NavLink to="/" className="nav-item">Home</NavLink>
            <NavLink to="/about" className="nav-item">About</NavLink>
            <NavLink to="/legal-notice" className="nav-item">Legal Notice</NavLink>
        </nav>
    </div>
  );
}

export default Nav;