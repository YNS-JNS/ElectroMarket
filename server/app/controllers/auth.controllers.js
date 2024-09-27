// server\app\controllers\auth.controllers.js:
import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
// import { cloudinaryUploadImage } from '../utils/cloudinary.js';
// import path from 'path';
// import fs from 'fs';
// import bcrypt from 'bcryptjs';
// import { fileURLToPath } from 'url';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import generateToken from '../utils/generateToken.js';

dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

/** ----------------------------------------------
* @desc    Register New User
* @route   /api/v1/auth/register
* @method  POST
* @access  public
----------------------------------------------- */
const registerUserCtrl = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;
    // 1. Validation:
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        res.status(400);
        throw new Error('User already exists');
    }

    // 2. Create and save the new user
    const newUser = new User({
        username,
        email,
        password
    });

    await newUser.save();

    // 3. Generate token
    const token = generateToken({ sub: newUser._id });

    // 4. Send response to client
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePhoto: newUser.profilePhoto,
            isAdmin: newUser.isAdmin,
            isAccountVerified: newUser.isAccountVerified,
        },
        token
    });
});

/*
const updateProfileUserCtrl = asyncHandler(async (req, res) => {

    // 1. Validation:
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });

    // Get the path to the image
    // Get the file path (Multer stores the file path in req.file.path)
    let imagePath;
    if (req.file) {
        imagePath = path.join(__dirname, `../images/${req.file.filename}`);
        console.log("imagePath: ", imagePath);
    }

    // check if user already exists
    if (existingUser) {
        if (imagePath) {
            // If the user already exists, remove the image from local server
            fs.unlinkSync(imagePath);
        }
        return res.status(400).json({
            success: false,
            message: 'User already exists!'
        })
    }

    // Check if the image file was uploaded
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: 'Please upload an image profile!',
            error: 'No image provided'
        });
    }



    // 3. Upload to cloudinary
    let result;
    try {
        result = await cloudinaryUploadImage(imagePath); // will return : { secure_url, public_id }
        console.log("result: ", result);
    } catch (error) {
        // If Cloudinary upload fails, remove the image from the server
        if (imagePath) {
            fs.unlinkSync(imagePath);
        }

        return res.status(500).json({
            success: false,
            message: 'Image upload failed. Please try again.',
            error: error.message,
        });
    }

    // 4. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // 5. Create and save the new user
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        profilePhoto: {
            url: result.secure_url,
            publicId: result.public_id
        },
        isAdmin: req.body.isAdmin,
        isAccountVerified: req.body.isAccountVerified
    });

    console.log("New User: ", newUser);
    await newUser.save();

    // 6. Remove the image from the server
    if (imagePath) {
        fs.unlinkSync(imagePath);
    }

    // 7. Send response to client
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });
});
*/

/** ----------------------------------------------
* @desc    Login User
* @route   /api/v1/auth/login
* @method  POST
* @access  public
----------------------------------------------- */
const loginUserCtrl = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    // 1. Validation:
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
        res.status(401);
        throw new Error('Invalid email or password');
    };

    // 2. Generate token
    const token = generateToken({ sub: user._id });

    // 4. Send response to client
    res.json({
        success: true,
        message: 'Logged in successfully',
        user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePhoto: user.profilePhoto,
            isAdmin: user.isAdmin,
            isAccountVerified: user.isAccountVerified,
          },
      
        token
    });

});


export { registerUserCtrl, loginUserCtrl };
