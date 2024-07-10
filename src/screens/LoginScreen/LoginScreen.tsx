import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
    // const handleLogin() {
        // if creadentials can't be found in the database, route back to /login
        // else let user in!
    // }

  return (
    <div className="App login-container">
        <h1 className="blue-color bold-label2 flex flex-c">Welcome to Web&Ink!</h1>
        <form className="login-form" /*onSubmit={handleLogin}*/>
            <label>
                <span className="bold-label">E-Mail: </span>
                <input
                required
                />
            </label>
            <label>
                <span className="bold-label">Password: </span>
                <input
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