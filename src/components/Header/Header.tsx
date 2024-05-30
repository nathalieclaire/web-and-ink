import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';  

function Header() {
  return (
    <div className="App">
      <header className="header flex flex-c text-center">
        <img src="logo_text_white.png" /* Use the absolut path from root here to prevent isssues! */ 
          className="logo"/>
        <div className="header-text">
          <h2>Your Virtual Bookstore</h2>
        </div>
        <SearchForm />
      </header>
    </div>
  );
}

export default Header;