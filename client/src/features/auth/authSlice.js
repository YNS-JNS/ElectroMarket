// client\src\features\auth\authSlice.js:
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authAction';

// initialize userToken from local storage
const token = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;

const initialState = {
    user: null,
    token,
    isLoading: false,
    error: null,
};

const authSlice = createSlice(
    {

        name: 'auth',
        initialState,
        reducers: {
            clearError: (state) => {
                state.error = null;
            },
            logout: (state) => {
                state.user = null;
                state.token = null;
                localStorage.removeItem('authToken');
            }
        },

        extraReducers: (builder) => {

            // login : ______________________
            builder.addCase(loginUser.pending, (state) => {
                console.log("Pending!");
                state.isLoading = true;
                state.error = null;
            });
            builder.addCase(loginUser.fulfilled, (state, { payload }) => {
                console.log("Fulfilled!");
                state.isLoading = false;
                state.user = payload.user;
                state.token = payload.token;
                localStorage.setItem('authToken', payload.token);
            });
            builder.addCase(loginUser.rejected, (state, { payload }) => {
                console.log("Rejected!");
                state.isLoading = false;
                state.error = payload.message;
            });
            // register: ______________________
            builder.addCase(registerUser.pending, (state) => {
                console.log("Pending!");
                state.isLoading = true;
                state.error = null;
            });
            builder.addCase(registerUser.fulfilled, (state, { payload }) => {
                console.log("Fulfilled!");
                state.isLoading = false;
                state.user = payload.user;
                state.token = payload.token;
                localStorage.setItem('authToken', payload.token);
            });
            builder.addCase(registerUser.rejected, (state, { payload }) => {
                console.log("Rejected!");
                state.isLoading = false;
                state.error = payload?.message;
            });
            // logout: ______________________
            // builder.addCase(logoutUser.fulfilled, (state) => {
            //     console.log("Fulfilled!");
            //     state.user = null;
            //     state.token = null;
            //     localStorage.removeItem('authToken');
            // });

        }
    }
);

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
