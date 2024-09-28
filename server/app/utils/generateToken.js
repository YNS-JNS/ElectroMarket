// server\app\utils\generateToken.js
import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1d', algorithm: 'HS256', 
    });
};

export default generateToken;