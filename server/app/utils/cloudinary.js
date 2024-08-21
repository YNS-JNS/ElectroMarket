import asyncHandler from 'express-async-handler';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Cloudinary Upload Image function:
const cloudinaryUploadImage = asyncHandler(async (fileToUpload) => {

    const data = await cloudinary.uploader.upload(fileToUpload, { resource_type: "auto" });
    console.log("data uploaded: ", data);
    return data;

});

// Cloudinary Remove Image function:
const cloudinaryRemoveImage = asyncHandler(async (imagePublicId) => {

    const result = await cloudinary.uploader.destroy(imagePublicId);
    console.log("result destroy: ", result);
    return result;

});

export { cloudinaryUploadImage, cloudinaryRemoveImage };