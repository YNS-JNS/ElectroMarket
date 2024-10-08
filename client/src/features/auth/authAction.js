// client\src\features\auth\authAction.js:
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../config/axios.js';

// Func to login:
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {

    try {
        const { data } = await axios.post('/auth/login', credentials);
        /* configure header's Content-Type as JSON
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await axios.post(
            `${backendURL}/api/v1/auth/login`,
            { email, password },
            config
         ) */

        console.log("Data:", data);
        // store user's token in local storage
        // localStorage.setItem('authToken', data.token);
        return data;

    } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else if (error.message) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue('An unexpected error occurred.');
        }
    }
});

// Func to register:
export const registerUser = createAsyncThunk('auth/registerUser', async ({ username, email, password, confirmPassword }, { rejectWithValue }) => {

    try {
        const { data } = await axios.post('/auth/register', { username, email, password, confirmPassword });

        console.log("Data:", data);
        return data;

    } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else if (error.message) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue('An unexpected error occurred.');
        }
    }
});

// export const logoutUser = createAsyncThunk('auth/logout', async () => {
//     await axiosInstance.post('/auth/logout');
//   });