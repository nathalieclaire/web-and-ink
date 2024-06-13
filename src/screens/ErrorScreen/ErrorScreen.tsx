import React from 'react';
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import './ErrorScreen.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const ErrorScreen = function() {
    const error = useRouteError(); 
    const errorMessage = isRouteErrorResponse(error) ? 
    error.statusText : error instanceof Error ? error.message : 
    "An unknown error occurred";

    return (
        <div>
            <Header />
            <h1>oops, something went wrong...</h1>
            {errorMessage}
            <Footer />
        </div>
    );
};
    

export default ErrorScreen;