// client\src\features\auth\authSlice.js:
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials, // object
            })
        }),
        // registerUser: builder.mutation({
        //     query: ({ username, email, password, confirmPassword }) => ({
        //         url: '/register',
        //         method: 'POST',
        //         body: { username, email, password, confirmPassword },
        //     }),
        // })
    }),
});

export const { useLoginUserMutation } = authApi;