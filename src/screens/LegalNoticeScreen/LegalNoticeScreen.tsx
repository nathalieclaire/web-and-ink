import React from 'react';
import './LegalNoticeScreen.css';

function LegalNoticeScreen() {
  return (
    <div className="App legal-container">
        <h1 className="blue-color bold-label2 flex flex-c">Legal Notice</h1>
        <h2 className="legal-heading bold-label">Welcome to Web&Ink</h2>
        <p>
          At Web & Ink, we are committed to providing a seamless and enriching experience for our 
          users. This Legal Notice outlines the terms and conditions governing the use of our 
          website, ensuring transparency and compliance with all relevant legal standards. By 
          accessing and using Web & Ink, you agree to adhere to these terms. Please read them 
          carefully to understand your rights and obligations while using our services.
        </p>
        <h2 className="legal-heading bold-label">Intellectual Property</h2>
        <p>
          All content on the Web & Ink website, including text, images, graphics, logos, and 
          software, is the property of Web & Ink or its content suppliers and is protected by 
          international copyright laws. Unauthorized use, reproduction, or distribution of any 
          content from this website is strictly prohibited. You may not use any of our trademarks 
          or trade dress without our express written consent. Web & Ink reserves all rights not 
          expressly granted in these terms.
        </p>
        <h2 className="legal-heading bold-label">Disclaimer of Liability</h2>
        <p>
          While we strive to ensure the accuracy and reliability of the information provided on our 
          website, Web & Ink makes no representations or warranties of any kind, express or implied, 
          about the completeness, accuracy, reliability, suitability, or availability of the website 
          or the information, products, services, or related graphics contained on the website for 
          any purpose. Any reliance you place on such information is therefore strictly at your own 
          risk. Web & Ink will not be liable for any loss or damage, including without limitation, 
          indirect or consequential loss or damage, or any loss or damage whatsoever arising from 
          loss of data or profits arising out of, or in connection with, the use of this website.
        </p>
        <h2 className="legal-heading bold-label">Privacy and Data Protection</h2>
        <p>
          Your privacy is of utmost importance to us. Web & Ink is committed to protecting your 
          personal data and ensuring it is processed in accordance with applicable data protection 
          laws. Our Privacy Policy, available on our website, details how we collect, use, and 
          safeguard your personal information. By using our website, you consent to the collection 
          and use of your data as outlined in the Privacy Policy. If you have any questions or 
          concerns about your privacy, please contact us at <a href="mailto:webandink@webandink.com"
          className="bold-label blue-color"> webandink@webandink.com</a>, and we will address them promptly.
        </p>
        <p>
          We appreciate your trust in Web & Ink and look forward to serving your web design and 
          development book needs with integrity and dedication.
        </p>
    </div>
  );
}

export default LegalNoticeScreen;