import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="App">
      <footer className="footer flex flex-c flex-column">
        <div className="flex flex-row flex-c">
          <Link to="/about" className="footer-text">About Us</Link>
          <Link to="/legal-notice" className="footer-text">Legal Notice</Link>
        </div>
        <p>Copyright &#169; 2024 Web & Ink. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;