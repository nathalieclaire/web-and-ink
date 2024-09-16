import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';  
import { useLocation } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';

function Header() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/'; // only renders the Nav when the user is not on the "/" page
  const showLogoutButton = location.pathname !== '/'; // only renders the LogoutButton when the user is not on the "/" page

  return (
    <div className="App">
      <header className="header flex flex-c text-center">
        <div className="logo-container flex flex-c">
          <img src="/logo_text_white.png" /* Use the absolut path from root here to prevent isssues! */ 
            className="logo"/>
          <img src="/logo_book.png" className="logo-book"/>
        </div>
        <div className="header-text">
          <h2>Your Virtual Bookstore</h2>
        </div>
        {showNavBar && <Nav /> /*conditional rendering of Nav */ }
        {showLogoutButton && <LogoutButton /> /*conditional rendering of LogoutButton */ }
      </header>
    </div>
  );
}

export default Header;