import Joi from 'joi';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let imagePath;

/**
 * Validate a user registration object
 * @param {Object} obj - The user registration object
 * @returns {Object} - The validated user registration object
 * @throws {Error} - If there is an issue with the validation
 */
function validateRegisterUser(obj) {

    const userSchema = Joi.object({

        username: Joi.string().trim().min(2).max(100).required(),
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
        // password: passwordComplexity().required(),
    });

    return userSchema.validate(obj, {abortEarly: false});
};

// ________________________________________________________________

/**
 * Validate a user login object
 * @param {Object} obj - The user login object
 * @returns {Object} - The validated user login object
 * @throws {Error} - If there is an issue with the validation
 */
function validateLoginUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
    });
    return schema.validate(obj, {abortEarly: false});
}

// ________________________________________________________________

// Validator middleware:
const registerUserValidator = (req, res, next) => {

    if (req.file) {
        imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
        console.log("imagePath: ", imagePath);
    }

    console.log("Request Body:", req.body); // Ajoutez ceci pour voir le contenu de req.body

    const { error } = validateRegisterUser(req.body);

    if (error) {
        if (imagePath) {
            // If the user already exists, remove the image from local server
            fs.unlinkSync(imagePath);
        }
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    next();
};

const loginUserValidator = (req, res, next) => {

    const { error } = validateLoginUser(req.body);

    if (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    next();
};

export { registerUserValidator, loginUserValidator };
