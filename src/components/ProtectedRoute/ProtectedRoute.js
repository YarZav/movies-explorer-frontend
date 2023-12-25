import React from 'react';
import { Navigate } from "react-router-dom";
import { jwtKey } from '../../utils/Constants';

const ProtectedRoute = ({ element: Component, ...props  }) => {
    function isLoggedIn() {
        return localStorage.getItem(jwtKey);
    }

    return (
        isLoggedIn() ? <Component {...props} /> : <Navigate to='/signin' replace/>
    )
}

export default ProtectedRoute;