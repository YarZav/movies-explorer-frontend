import React from 'react';
import { Navigate } from "react-router-dom";

import { mainLocalStorage } from '../../utils/MainLocalStorage';

const AuthedRoute = ({ element: Component, ...props  }) => {
    function isLoggedIn() {
        return mainLocalStorage.getJwt();
    }

    return (
        isLoggedIn() ? <Navigate to='/movies' replace/> : <Component {...props} />
    )
}

export default AuthedRoute;