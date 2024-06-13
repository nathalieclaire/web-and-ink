import React from 'react';
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import './ErrorScreen.css';

export const ErrorScreen = function() {
    const error = useRouteError(); 
    const errorMessage = isRouteErrorResponse(error) ? 
    error.statusText : error instanceof Error ? error.message : 
    "An unknown error occurred";

    return (
        <div>
            <h1>oops, something went wrong...</h1>
            <div>
                {errorMessage}
            </div>
        </div>
    );
};
    

export default ErrorScreen;