import React from 'react';
import { Navigate } from "react-router-dom";

import { mainLocalStorage } from '../../utils/MainLocalStorage';

const ProtectedRoute = ({ element: Component, ...props  }) => {
    function isLoggedIn() {
        return mainLocalStorage.getJwt();
    }

    return (
        isLoggedIn() ? <Component {...props} /> : <Navigate to='/signin' replace/>
    )
}

export default ProtectedRoute;