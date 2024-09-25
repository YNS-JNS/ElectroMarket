// client\src\features\auth\authAction.js:
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../config/axios.js';

// Func to register:
export const registerUser = createAsyncThunk('auth/registerUser', async (formData , { rejectWithValue }) => {

    try {
        const { data } = await axios.post('/auth/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        });

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

// Func to login:
export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {

    try {
        const { data } = await axios.post('/auth/login', { email, password });

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
        localStorage.setItem('authToken', data.token);
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
