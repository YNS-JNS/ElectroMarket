// server\app\controllers\auth.controllers.js:
import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import { cloudinaryUploadImage, cloudinaryRemoveImage } from '../utils/cloudinary.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import generateToken from '../utils/generateToken.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** ----------------------------------------------
* @desc    Register New User
* @route   /api/v1/auth/register
* @method  POST
* @access  public
----------------------------------------------- */
const registerUserCtrl = asyncHandler(async (req, res) => {

    const { username, email, password, confirmPassword } = req.body;
    // 1. Validation:

    // Check password and confirm password match
    if (password !== confirmPassword) {
        res.status(400);
        throw new Error('Passwords do not match');
    }

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

    // 4. Set HttpOnly cookie
    const options = {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.cookie('token', token, options);

    // 5. Send response to client
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
        }
    });
});

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

    // 3. Set HttpOnly cookie
    // 4. Set HttpOnly cookie
    const options = {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.cookie('token', token, options);

    // 4. Send response to client
    res.json({
        success: true,
        message: 'Logged in successfully',
        data: {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePhoto: user.profilePhoto,
            isAdmin: user.isAdmin,
            isAccountVerified: user.isAccountVerified,
        }
    });

});

/** ----------------------------------------------
* @desc    Logout User
* @route   /api/v1/auth/logout
* @method  POST
* @access  public
----------------------------------------------- */
const logoutUserCtrl = asyncHandler(async (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0),
    })

    res.json({
        success: true,
        message: 'Successful disconnection',
    });
})

/** ----------------------------------------------
* @desc    Get User Profile
* @route   /api/v1/auth/profile
* @method  GET
* @access  private
----------------------------------------------- */
const getUserProfileCtrl = asyncHandler(async (req, res) => {

    // console.log("req.user: ", req.user);

    const userAuthenticated = await User.findById(req.user._id).select('-password');

    if (!userAuthenticated) {
        res.status(404);
        throw new Error('User not found!');
    }

    res.json({
        success: true,
        data: userAuthenticated
    });

});

/** ----------------------------------------------
* @desc    Update User Profile
* @route   /api/v1/auth/profile/update
* @method  PUT
* @access  private
----------------------------------------------- */
const updateUserProfileCtrl = asyncHandler(async (req, res) => {

    // 1. Verify if the user is authenticated
    if (!req.user) {
        res.status(401);
        throw new Error('User not authenticated!');
    }

    // 2.Check if the user exists
    const user = await User.findById(req.user._id);
    if (!user) {
        res.status(404);
        throw new Error('User not found!');
    }

    // 3. Update user fields
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
        user.password = req.body.password;
    }

    // 4. Handle image processing
    if (req.file) {
        const imagePath = path.join(__dirname, `../images/${req.file.filename}`);

        try {
            // Upload new image to Cloudinary
            const result = await cloudinaryUploadImage(imagePath); // will return : { secure_url, public_id }

            // if successful, update user's profilePhoto
            if (result && result.secure_url) {
                // Remove old image from Cloudinary if it exists
                await cloudinaryRemoveImage(user.profilePhoto?.publicId);
            }

            user.profilePhoto = {
                url: result.secure_url,
                publicId: result.public_id
            }

            // Remove temporary file from server
            fs.unlinkSync(imagePath);

        } catch (error) {
            // If Cloudinary upload fails, remove the temporary file
            fs.unlinkSync(imagePath);
            res.status(400);
            throw new Error(`Image upload failed: ${error.message}`);
        }
    }

    // 5. Save the updated user
    await user.save();

    res.json({
        success: true,
        message: 'User profile updated successfully',
        data: user
    });

});


export { registerUserCtrl, loginUserCtrl, logoutUserCtrl, getUserProfileCtrl, updateUserProfileCtrl };
