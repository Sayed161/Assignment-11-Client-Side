import React, { useContext } from 'react'
import { AuthContext } from './AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const { Quser } = useContext(AuthContext);

    if(Quser && Quser?.email )
        {
            return children;
        }
    return <Navigate to={"/login"}></Navigate>   
}

export default PrivateRouter
