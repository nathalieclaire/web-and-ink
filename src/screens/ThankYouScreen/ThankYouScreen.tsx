import React from 'react';
import './ThankYouScreen.css';
import { useNavigate } from 'react-router-dom';

function ThankYouScreen() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

  return (
    <div className="App thanks-container flex">
        <h2 className="bold-label thanks-heading">Thanks for your purchase!</h2>
        <button className="button" id="continue-shopping-button" onClick={handleClick}>Continue Shopping</button>
    </div>
  );
}

export default ThankYouScreen;