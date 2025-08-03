
// Protected_Routes.jsx

import React from 'react'
import { Navigate } from 'react-router-dom';

function Protected_Routes({ children  }) {
    
    const user = sessionStorage.getItem("Email");

    if (!user) {
    
        return <Navigate to="/" replace /> 
    }

    return children;
}

export default Protected_Routes
