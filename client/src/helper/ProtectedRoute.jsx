import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {

    const userInfo = !!localStorage.getItem('userInfo');
    
  return userInfo ? <Outlet/> : <Navigate to='/login'/>
}