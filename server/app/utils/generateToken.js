// server\app\utils\generateToken.js
import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1d', algorithm: 'HS256', 
    });
    return token;
};

export default generateToken;