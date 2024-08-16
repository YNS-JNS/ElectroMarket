import express from 'express';
const router = express.Router();
import { uploadUserImageProfile } from '../controllers/user.controllers.js';
import { photoUpload } from '../middlewares/uploadImages.js';

router.post('/upload-image', photoUpload.single("image"), uploadUserImageProfile);

export default router;