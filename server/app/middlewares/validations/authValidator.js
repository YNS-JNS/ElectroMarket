import Joi from 'joi';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * User validation schemas:
*/
const userSchemas = {
    registerUser: Joi.object({
        username: Joi.string().trim().min(2).max(100).required(),
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
        // password: passwordComplexity().required(),
        profilePhoto: Joi.object({
            url: Joi.string(),
            publicId: Joi.string(),
        })
    }),
    loginUser: Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
    }),
    updateUser: Joi.object({
        username: Joi.string().trim().min(2).max(100),
        email: Joi.string().trim().min(5).max(100).email(),
        password: Joi.string().trim().min(8),
        // password: passwordComplexity(),
    }).min(1)
    ,
    // updateUserProfile: Joi.object({
    //     username: Joi.string().trim().min(2).max(100),
    //     email: Joi.string().trim().min(5).max(100).email(),
    //     // password: passwordComplexity(),
    // }).min(1)
    // ,
};

/**
 * Validate user data based on schema type
 * @param {Object} data - The user data to validate
 * @param {String} type - The schema type ('register' or 'login')
 * @returns {Object} - The validated user data or an error
 */
function validateUser(data, type) {
    const { error } = userSchemas[type].validate(data, { abortEarly: false });
    if (error) {
        throw new Error(error.details[0].message);
    }
};

// ________________________________________________________________

/**
 * Middleware for user registration validation
 */
const registerUserValidator = (req, res, next) => {

    let imagePath;

    if (req.file) {
        imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
        console.log("imagePath: ", imagePath);
    }

    console.log("Request Body:", req.body);

    try {
        validateUser(req.body, 'registerUser');
        next();
    } catch (error) {

        if (imagePath) {
            // Remove the image if validation fails
            fs.unlinkSync(imagePath);
        }
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

export { registerUserValidator, loginUserValidator };