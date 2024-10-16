import React, { useState } from 'react';
import './LoginScreen.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/user/userSlice';
import { setUserEmail } from '../../state/cart/cartSlice';

function LoginScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('admin@bookmonkey.api');
    const [password, setPassword] = useState('password1!'); // all my users use this password :)

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();

        try {
            const x =JSON.stringify({ "email": email, "password": password });
            console.log(x);
            const response = await fetch('http://localhost:4730/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: x,
            });
            console.log(response);
            console.log(response.status);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const res = await response.json();
            console.log("USER:", res);

            if (res) {
                // Dispatch the user data to the Redux store
                dispatch(setUser({ role: res.user.role, email: res.user.email }));
                // Dispatch to save user email in cartSlice
                dispatch(setUserEmail(email));
                console.log(res.user.email);

                if (res.user.role === "admin" || res.user.role === "non-admin") {
                    navigate('/home');
                } else {
                    alert('Your account is not authorized.');
                    navigate('/');
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('The credentials you entered are incorrect!');
            navigate('/');
        }
    }


  return (
    <div className="App login-container">
        <h1 className="blue-color bold-label2 flex flex-c">Welcome to Web&Ink!</h1>
        <form className="login-form" onSubmit={handleLogin}>
            <label>
                <span className="bold-label">E-Mail: </span>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
                <span className="bold-label">Password: </span>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <div className="login-button-container flex">
            <button type="submit" className="button">
                Login
            </button>
            </div>
        </form>
    </div>
  );
}

export default LoginScreen;