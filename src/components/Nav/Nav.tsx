import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/legal-notice">Legal Notice</NavLink>
        </nav>
    </div>
  );
}

export default Nav;