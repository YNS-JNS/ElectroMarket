import express from 'express'
const router = express.Router();
import { createBrand } from '../controllers/brand.controllers.js';

router.post('/', createBrand);

// router.get('/', brandController.getBrands);

// router.get('/:id', brandController.getBrand);

// router.put('/:id', brandController.updateBrand);

// router.delete('/:id', brandController.deleteBrand);

export default router;
