import express from 'express';
const router = express.Router();
import { getAllUsersCtrl } from '../controllers/user.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';
// import { photoUpload } from '../middlewares/uploadImages.js';

// router.post('/upload-image', photoUpload.single("image"), createNewUser);
// router.put('/:id/update/upload-image', photoUpload.single("image"), updateUserPhotoProfile);

router.get('/profile', verifyToken, getAllUsersCtrl);

export default router;