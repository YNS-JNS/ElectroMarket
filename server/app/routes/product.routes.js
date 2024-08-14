import express from 'express';
import { createProduct } from "../controllers/product.controllers.js";
import { productValidator } from "../middlewares/validations/productValidators.js";
// import { isIdValidator } = require("../middlewares/validations/idValidator");

const router = express.Router(); // Router func

/* ____________________________________________________________________ */
/*                            Routes section                            */
/* ____________________________________________________________________ */

/**
 * @function createProduct
 * @description Create a new product.
 * @route {POST} /api/v1/products
 * @param {Object} payload - The product data to be created.
 * @returns {Object} - The created product.
 * @throws {Error} - If there is an issue.
*/
router.post('/', productValidator, createProduct);

// ______________________________________________________________________

/**
 * @function getProductList
 * @description Get a list of all products.
 * @route {GET} /api/v1/product
 * @returns {Object[]} - List of products.
 * @throws {Error} - If there is an issue retrieving the product list.
 * @example
 * [
 *   {
 *     name: "Product 1",
 *     ...
 *     price: 29.99
 *   },
 *   {
 *     name: "Product 2",
 *     ...
 *     price: 39.99
 *   }
 * ]
*/
/**
 * @desc GET | GET ALL Products
 * @params No param
*/
// router.get('/', productCtrl.getProductList);

// ______________________________________________________________________

/**
 * @function getProduct
 * @description Get a product by id.
 * @route {GET} /api/v1/product/:id
 * @returns {Object[]} - Product.
 * @throws {Error} - If there is an issue retrieving the product list.
 * @example
 * [
 *   {
 *     name: "Product 1",
 *     ...
 *     price: 29.99
 *   }
 * ]
*/
/**
 * @desc GET | GET Product
 * @params {id}
*/
// router.get('/:id', isIdValidator, productCtrl.getProduct);

// ______________________________________________________________________

/**
 * @desc PUT | Update a Product
 * @params {id}
*/
// router.put('/:id', isIdValidator, productCtrl.updateProduct);

// ______________________________________________________________________

/**
 * @desc DELETE | Delete a Product
 * @params {id}
*/
// router.delete('/:id', isIdValidator, productCtrl.deleteOneProduct);

// ______________________________________________________________________

// Importing router:
export default router;