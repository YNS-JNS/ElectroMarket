import React, { useEffect, useState } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
const ProtectedRoute = () => {

    const token = localStorage.getItem('authToken'); // Get the token from localStorage
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation(); // Utilisé pour obtenir l'URL actuelle

    useEffect(() => {
    const token = localStorage.getItem('authToken'); // Get the token from localStorage

        setIsAuthenticated(!!token); // Convertit en booléen : true si le token existe, false sinon
    }, [token]);

    if (!isAuthenticated) {

        // Redirection avec l'état qui indique la page d'origine
        return (<Navigate to="/login" state={{ from: location }} replace />);
    }

    return <Outlet />;

}

export default ProtectedRoute;