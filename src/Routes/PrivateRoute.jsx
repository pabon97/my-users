import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    let location = useLocation();
    console.log(location)
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace />;
}

export default PrivateRoute