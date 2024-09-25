// client\src\features\auth\authSlice.js:
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authAction';

// initialize userToken from local storage
const token = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;

const initialState = {

    user: null,
    token,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "idle",
};

const authSlice = createSlice(
    {

        name: 'auth',
        initialState,
        reducers: {
            logout: (state) => {
                localStorage.removeItem('authToken');
                state.user = null;
                state.token = null;
                state.isFetching = false;
                state.isSuccess = false;
                state.isError = false;
                state.errorMessage = "idle";
            }
        },

        extraReducers: (builder) => {

            // login : ______________________
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

            // register: ______________________
            builder.addCase(registerUser.pending, (state) => {
                console.log("Pending!");
                state.isFetching = true;
            });
            builder.addCase(registerUser.fulfilled, (state, { payload }) => {
                console.log("Fulfilled!");
                state.user = payload.user;
                // state.token = payload.token;
                state.isFetching = false;
                state.isSuccess = true;
            });
            builder.addCase(registerUser.rejected, (state, { payload }) => {
                console.log("Rejected!");
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = payload?.message || "An error occurred.";
            });

        }
    }
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
