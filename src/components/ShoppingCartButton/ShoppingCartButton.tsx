import React from 'react';
import './ShoppingCartButton.css';
import { useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

function ShoppingCartButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/shopping-cart");
    }

    return (
        <div className="App">
            <button onClick={handleClick} className = "button"><LuShoppingCart size = {20}/></button>
        </div>
    );
}

export default ShoppingCartButton;