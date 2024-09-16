import React from 'react';
import './ShoppingCartButton.css';
import { useNavigate } from "react-router-dom";

function ShoppingCartButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/shopping-cart");
    }

    return (
        <div className="App">
            <button onClick={handleClick} className = "button">Cart</button>
        </div>
    );
}

export default ShoppingCartButton;