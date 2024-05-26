import React from 'react';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo_text_white.png" /* Use the absolut path from root here to prevent isssues! */ 
          className="logo"/>
        <div className="header-text">
          <h2>Your Virtual Bookstore</h2>
        </div>
      </header>
    </div>
  );
}

export default Header;