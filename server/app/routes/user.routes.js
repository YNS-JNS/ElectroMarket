import express from 'express';
const router = express.Router();
import { createNewUser, updateUserPhotoProfile } from '../controllers/user.controllers.js';
import { photoUpload } from '../middlewares/uploadImages.js';

router.post('/upload-image', photoUpload.single("image"), createNewUser);
router.put('/:id/update/upload-image', photoUpload.single("image"), updateUserPhotoProfile);

export default router;