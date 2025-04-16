import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthProviders';
import { Navigate } from 'react-router-dom';
import SkeletonCard from '../Components/SkeletonCard';
const PrivateRouter = ({children}) => {
    const { Quser,loading } = useContext(AuthContext);
     if(loading)
       {
        return <SkeletonCard/>
            
          }
       
    if(Quser && Quser?.email )
        {
            return children;
        }
    return <Navigate to={"/login"}></Navigate>   
}

export default PrivateRouter
