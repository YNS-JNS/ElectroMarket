import Joi from"joi";

/**
 * Function to Check if Id is valid or not
 * @param {string} id - Id of the product
 * @returns {object} - Joi validation result
 */
const checkingId = (id) => {

    const idSchema = Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$'));

    return idSchema.validate(id);
};

// Middleware for Checking Product Id
exports.isIdValidator = (req, res, next) => {

    const { error: idError } = checkingId(req.params.id);

    if (idError) {
        console.log(idError.details[0].message);
        return res.status(400).json({
            success: false,
            message: `Product Id = ${req.params.id} is invalid !`
        });
    }

    next();
};