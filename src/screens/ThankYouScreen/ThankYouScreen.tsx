import React from 'react';
import './ThankYouScreen.css';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../state/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ThankYouScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate('/home');
    }

    useEffect(() => {
      dispatch(clearCart()); // Clear the shopping cart when this component is mounted
    }, [dispatch]);


  return (
    <div className="App thanks-container flex">
        <h2 className="bold-label thanks-heading">Thanks for your purchase!</h2>
        <button className="button" id="continue-shopping-button" onClick={handleClick}>Continue Shopping</button>
    </div>
  );
}

export default ThankYouScreen;