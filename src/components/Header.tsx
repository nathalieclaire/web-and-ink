import React from 'react';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">
          <h1>Web & Ink</h1>
          <h2>Your Virtual Bookstore</h2>
        </div>
        <img src="/logo192.png" /* Use the absolut path from root here to prevent isssues! *//>
      </header>
    </div>
  );
}

export default Header;