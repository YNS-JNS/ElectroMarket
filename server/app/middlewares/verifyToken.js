import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = async (req, res, next) => {

    const authToken = req.headers.authorization;
    if (authToken) {

        const token = authToken.split(' ')[1];

        try {

            const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);

            const userAuthenticated = await User.findById(decodedPayload.sub).select('-password');
            if (!userAuthenticated) {
                return res.status(401).json({ message: 'User not found, access denied!' });
            }

            req.user = userAuthenticated;
            next();

        } catch (error) {
            return res.status(401).json({ message: 'Invalid token, access denied!', error: error.message });
        }

    } else {
        return res.status(401).json({ message: 'No token provided, access denied!' });
    }

}

export { verifyToken };