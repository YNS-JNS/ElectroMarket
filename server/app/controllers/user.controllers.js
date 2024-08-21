import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';
// Define __dirname for ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importing utils:
import { cloudinaryUploadImage, cloudinaryRemoveImage } from '../utils/cloudinary.js';

// POST - Create a new user profile
const createNewUser = asyncHandler(async (req, res) => {

    const { name } = req.body;

    console.log("User name: ", name);
    console.log("Uploaded file: ", req.file);

    // 1. Validation:
    // Check if the image file was uploaded
    if (!name || !req.file) {
        res.status(400);
        throw new Error('Please enter all fields');
    }

    // 2. Get the path to the image:
    // Get the file path (Multer stores the file path in req.file.path)
    const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
    console.log("imagePath: ", imagePath);

    // 3. Upload to cloudinary
    const result = await cloudinaryUploadImage(imagePath); // will return : { secure_url, public_id }

    console.log("result: ", result);

    // 4. Save the data in the DB
    const user = await User.create({
        name,
        imageProfile: {
            url: result.secure_url,
            publicId: result.public_id
        }
    });

    console.log("User: ", user);

    await user.save();

    // 5. Send response to client
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: user
    });

    // 6. Remove the image from the server
    fs.unlinkSync(imagePath);

});

// PUT - Update user photo profile
const updateUserPhotoProfile = asyncHandler(async (req, res) => {
    // 1. Validation:
    if (!req.file) {
        res.status(400);
        throw new Error('Please upload an image profile!');
    }

    // 2. Get the path to the image:
    const imagePath = path.join(__dirname, `../images/${req.file.filename}`);

    // 3. Upload to cloudinary
    const result = await cloudinaryUploadImage(imagePath); // will return : { secure_url, public_id }

    // 4. Get the user from DB
    const user = await User.findById(req.params.id);
    console.log("user: ", user);

    // 5. Delete the old profile photo if exist
    if (user && user.imageProfile?.publicId !== null) {
        await cloudinaryRemoveImage(user.imageProfile.publicId);
    }

    // 6. Change the profilePhoto field in the DB
    user.imageProfile = {
        url: result.secure_url,
        publicId: result.public_id
    }

    await user.save();

    // 7. Send response to client
    res.status(201).json({
        success: true,
        message: 'User photo profile updated successfully',
        data: user
    });

    // 8. Remove the image from the server
    fs.unlinkSync(imagePath);
});

export { createNewUser, updateUserPhotoProfile };