// server\app\routes\auth.routes.js
import express from 'express';
// import { photoUpload } from '../middlewares/uploadImages.js';
import {
    registerUserCtrl,
    loginUserCtrl,
    logoutUserCtrl,
    getUserProfileCtrl,
    updateUserProfileCtrl
} from '../controllers/auth.controllers.js';
import { registerUserValidator, loginUserValidator } from '../middlewares/validations/authValidator.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/register', registerUserValidator, registerUserCtrl);
router.post('/login', loginUserValidator, loginUserCtrl);
router.post('/logout', logoutUserCtrl);
router.get('/profile', verifyToken, getUserProfileCtrl);
router.put('/profile/update', verifyToken, updateUserProfileCtrl);


export default router;

// router.post('/register', photoUpload.single("image"), registerUserValidator, registerUserCtrl);