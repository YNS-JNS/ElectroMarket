// server\app\routes\auth.routes.js
import express from 'express';
import {
    registerUserCtrl,
    loginUserCtrl,
    logoutUserCtrl,
    getUserProfileCtrl,
    updateUserProfileCtrl
} from '../controllers/auth.controllers.js';
import {
    registerUserValidator,
    loginUserValidator,
    updateUserProfileValidator
} from '../middlewares/validations/authValidator.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import { photoUpload } from '../middlewares/uploadImages.js';

const router = express.Router();

router.post('/register', registerUserValidator, registerUserCtrl);
router.post('/login', loginUserValidator, loginUserCtrl);
router.post('/logout', logoutUserCtrl);
router.get('/profile', verifyToken, getUserProfileCtrl);
router.put('/profile/update', verifyToken, photoUpload.single("image"), updateUserProfileValidator, updateUserProfileCtrl);


export default router;