import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
        <nav>
            <NavLink to="/" className="nav-item bold-label">Home</NavLink>
            <NavLink to="/about" className="nav-item bold-label">About</NavLink>
            <NavLink to="/legal-notice" className="nav-item bold-label">Legal Notice</NavLink>
        </nav>
    </div>
  );
}

export default Nav;