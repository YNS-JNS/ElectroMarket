// client\src\features\auth\authSlice.js:
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config/axios.js';

// initialize userToken from local storage
const token = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;

const initialState = {

    user: null,
    token,
    authStatus: "idle",
    loading: false,
    error: null,
};

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
})

const authSlice = createSlice(
    {

        name: 'auth',
        initialState,
        reducers: {},

        extraReducers: (builder) => {

            builder.addCase(loginUser.pending, (state) => {
                console.log("Pending!");
                state.authStatus = 'pending';
                state.loading = true;
                state.error = null;
            });
            builder.addCase(loginUser.fulfilled, (state, { payload }) => {
                console.log("Fulfilled!");
                state.authStatus = 'succeeded';
                state.loading = false;
                state.user = payload.user;
                state.token = payload.token;
                state.error = null;
            });
            builder.addCase(loginUser.rejected, (state, { payload }) => {
                console.log("Rejected!");
                state.authStatus = 'rejected';
                state.loading = false;
                state.user = null;
                state.error = payload.message;
            });

        }
    }
);

export default authSlice.reducer;