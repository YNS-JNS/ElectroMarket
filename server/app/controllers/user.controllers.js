import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';


/** -----------------------------------------------
 * @desc    Get All Users Profile
 * @route   /api/v1/users/profile
 * @method  GET
 * @access  private (only admin)
 ------------------------------------------------ */
const getAllUsersCtrl = asyncHandler(async (req, res) => {

    const users = await User.find().select("-password");

    if (users.length === 0) {
        res.status(404).json({
            success: false,
            message: 'No users found!'
        })
    }

    res.status(200).json({
        success: true,
        message: 'All users fetched successfully',
        data: users,
        count: users.length
    });
});

// PUT - Update user photo profile
// const updateUserPhotoProfile = asyncHandler(async (req, res) => {
//     // 1. Validation:
//     if (!req.file) {
//         res.status(400);
//         throw new Error('Please upload an image profile!');
//     }

//     // 2. Get the path to the image:
//     const imagePath = path.join(__dirname, `../images/${req.file.filename}`);

//     // 3. Upload to cloudinary
//     const result = await cloudinaryUploadImage(imagePath); // will return : { secure_url, public_id }

//     // 4. Get the user from DB
//     const user = await User.findById(req.params.id);
//     console.log("user: ", user);

//     // 5. Delete the old profile photo if exist
//     if (user && user.profilePhoto?.publicId !== null) {
//         await cloudinaryRemoveImage(user.profilePhoto.publicId);
//     }

//     // 6. Change the profilePhoto field in the DB
//     user.profilePhoto = {
//         url: result.secure_url,
//         publicId: result.public_id
//     }

//     await user.save();

//     // 7. Send response to client
//     res.status(201).json({
//         success: true,
//         message: 'User photo profile updated successfully',
//         data: user
//     });

//     // 8. Remove the image from the server
//     fs.unlinkSync(imagePath);
// });

export { getAllUsersCtrl };