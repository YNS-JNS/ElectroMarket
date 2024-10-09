// server\app\middlewares\auth.middlewares.js:
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';
// import path from 'path';
// import fs from 'fs';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
};

/**
 * User validation schemas:
*/
const userSchemas = {
    registerUser: Joi.object({
        username: Joi.string().trim().min(2).max(100).required(),
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: passwordComplexity(complexityOptions).required(),
        confirmPassword: Joi.ref('password'),
        // confirmPassword: Joi.any().valid(Joi.ref('password')).required().label('Confirm password'),
    }).with('password', 'confirmPassword'),
    loginUser: Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
    }),
    updateUserProfile: Joi.object({
        username: Joi.string().trim().min(2).max(100),
        email: Joi.string().trim().min(5).max(100).email(),
        password: passwordComplexity(complexityOptions),
    }),
};

/**
 * Validate user data based on schema type
 * @param {Object} data - The user data to validate
 * @param {String} type - The schema type ('register', 'login' or 'updateUserProfile')
 * @returns {Object} - The validated user data or an error
 */
function validateUser(data, type) {
    const { error } = userSchemas[type].validate(data, { abortEarly: false });
    if (error) {
        // throw new Error(error.details[0].message);
        throw new Error(error.details.map(detail => detail.message).join(', '));
    }
};

// ________________________________________________________________

/**
 * Middleware for user registration validation
 */
const registerUserValidator = (req, res, next) => {

    // let imagePath;

    // if (req.file) {
    //     imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
    //     console.log("imagePath: ", imagePath);
    // }

    console.log("Request Body in registerUserValidator:", req.body);

    try {
        validateUser(req.body, 'registerUser');
        next();
    } catch (error) {

        // if (imagePath) {
        // Remove the image if validation fails
        //     fs.unlinkSync(imagePath);
        // }
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

// ________________________________________________________________

/**
 * Middleware for user login validation
 */
const loginUserValidator = (req, res, next) => {

    try {
        validateUser(req.body, 'loginUser');
        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/**
 * Middleware for user profile update validation
 */
const updateUserProfileValidator = (req, res, next) => {
    try {
        validateUser(req.body, 'updateUserProfile');
        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export { registerUserValidator, loginUserValidator, updateUserProfileValidator };