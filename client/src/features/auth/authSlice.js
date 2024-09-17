// client\src\features\auth\authSlice.js:
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authAction';

// initialize userToken from local storage
const token = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;

const initialState = {

    user: null,
    token,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "idle",
    // authStatus: "idle",
    // loading: false,
    // error: null,
};

const authSlice = createSlice(
    {

        name: 'auth',
        initialState,
        reducers: {},

        extraReducers: (builder) => {

            builder.addCase(loginUser.pending, (state) => {
                console.log("Pending!");
                state.isFetching = true;
            });
            builder.addCase(loginUser.fulfilled, (state, { payload }) => {
                console.log("Fulfilled!");
                state.user = payload.user;
                state.token = payload.token;
                state.isFetching = false;
                state.isSuccess = true;
            });
            builder.addCase(loginUser.rejected, (state, { payload }) => {
                console.log("Rejected!");
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = payload.message;
            });

        }
    }
);

export default authSlice.reducer;
