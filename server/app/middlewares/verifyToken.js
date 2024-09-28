// server\app\middlewares\verifyToken.js
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = asyncHandler(async (req, res, next) => {

    // 1. Extract the token from the request headers:

    const authHeader = req.headers.authorization;
    // Check if token exists
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(401);
        throw new Error('No token provided, access denied!');
    }

    // 2. Extract token from header
    const token = authHeader.split(' ')[1];

    try {
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
        const userAuthenticated = await User.findById(decodedPayload.sub).select('-password');

        // Check if user exists
        if (!userAuthenticated) {
            res.status(401)
            throw new Error('User not found, access denied!');
        }

        // 3. Add user to request object
        req.user = userAuthenticated;
        next();

    } catch (error) {
        res.status(401)
        throw new Error('Invalid token, access denied!');
    }

});

export { verifyToken };