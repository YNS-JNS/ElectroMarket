import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';


// POST - Create a new user profile
const uploadUserImageProfile = asyncHandler(async (req, res) => {

    const imageProfile = req.file;
    console.log(imageProfile);

    // Check if the image file was uploaded
    if (!imageProfile) {
        res.status(400);
        throw new Error('Please upload an image profile!');
    }

    // Get the file path (Multer stores the file path in req.file.path)
    const imagePath = `/images/${imageProfile.filename}`; // Adjust this path based on your folder structure

    // Create the user image profile
    const user = await User.create({ imageProfile: imagePath });

    res.status(201).json({
        success: true,
        message: 'User image profile uploaded successfully',
        data: user
    });

});

export { uploadUserImageProfile };