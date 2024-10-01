// config/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to include the authentication token
// Intercepteur pour ajouter le token à chaque requête
axiosInstance.interceptors.request.use(
    config => {
        // Get the authentication token from wherever it is stored (e.g., local storage, Redux state, etc.)
        const token = localStorage.getItem('authToken'); // Example: Retrieve token from local storage

        // If a token exists, add it to the request headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;

/* import axios from 'axios';

export default axios.create(
    {
        baseURL: 'http://localhost:8080/api/v1/',
        headers: {
            'Content-Type': 'application/json'
        }
    }
); */