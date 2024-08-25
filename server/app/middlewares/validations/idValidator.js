import Joi from "joi";

/**
 * Function to Check if Id is valid or not
 * @param {string} id - Id of the product
 * @returns {object} - Joi validation result
 */
const checkingId = (id) => {

    const idSchema = Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$'));

    return idSchema.validate(id);
};

/**
 * Middleware for Checking Valid Id
 *
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 */
exports.isIdValidator = (req, res, next) => {

    // destructure the error object from Joi
    const { error: idError } = checkingId(req.params.id);

    // If there is an error, log it and return a 400 status with a message
    if (idError) {
        console.log(idError.details[0].message);
        return res.status(400).json({
            success: false,
            message: `Id = ${req.params.id} is invalid!`
        });
    }

    // If validation is successful, move to the next middleware
    next();
};

