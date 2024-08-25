import express from 'express';
import { photoUpload } from '../middlewares/uploadImages.js';
import { registerUserCtrl } from '../controllers/auth.controllers.js';
import { registerUserValidator } from '../middlewares/validations/authValidator.js';

const router = express.Router();

router.post('/register', photoUpload.single("image"), registerUserValidator, registerUserCtrl);


export default router;
