import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="App">
      <footer className="footer flex flex-c flex-column">
        <div className="flex flex-row flex-c">
          <h1 className="footer-text">About Us</h1>
          <h1 className="footer-text">Legal Notice</h1>
        </div>
        <p>Copyright &#169; 2024 Web & Ink. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;