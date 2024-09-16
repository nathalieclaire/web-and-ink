import React from 'react';
import './LogoutButton.css';
import { useNavigate } from "react-router-dom";

function LogoutButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="App">
            <button onClick={handleClick} className = "button logout-button">Logout</button>
        </div>
    );
}

export default LogoutButton;