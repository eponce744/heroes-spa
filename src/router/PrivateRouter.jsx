import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRouter = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    console.log(lastPath);
    localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : <Navigate to="/login"></Navigate>
}
