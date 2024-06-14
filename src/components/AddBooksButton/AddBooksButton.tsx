import React from 'react';
import './AddBooksButton.css';
import { useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

function AddBooksButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/add-book");
    }

    return (
        <div className="App">
            <button onClick={handleClick} className = "button"><BsPlusLg size = {20}/></button>
        </div>
    );
}

export default AddBooksButton;