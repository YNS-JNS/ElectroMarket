import express from 'express'
const router = express.Router();
import {createCategory} from '../controllers/category.controllers.js';

router.post('/', createCategory);

// router.get('/', categoryController.getCategories);

// router.get('/:id', categoryController.getCategory);

// router.put('/:id', categoryController.updateCategory);

// router.delete('/:id', categoryController.deleteCategory);

export default router;
