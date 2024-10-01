import React from 'react';
import './LogoutButton.css';
import { useNavigate } from "react-router-dom";
import { logout } from '../../state/user/userSlice';
import { useDispatch } from 'react-redux';

function LogoutButton() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch the logout action
        dispatch(logout());
        navigate("/");
    }

    return (
        <div className="App">
            <button onClick={handleClick} className = "button logout-button">Logout</button>
        </div>
    );
}

export default LogoutButton;