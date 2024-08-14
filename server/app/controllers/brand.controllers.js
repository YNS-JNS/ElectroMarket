import asyncHandler from 'express-async-handler';
import Brand from '../models/brand.model.js';

// POST
const createBrand = asyncHandler(async (req, res) => {

    const { name } = req.body;

    // check brand existence 
    const brandExists = await Brand.findOne({ name });
    if (brandExists) {
        throw new Error('Brand Already Exists!');
    }

    // else Create the new brand
    const brand = await Brand.create(req.body);

    res.status(201).json({
        success: true,
        message: "Brand created successfully",
        data: brand
    });
});

// GET ALL
// exports.getBrands = asyncHandler(async (req, res) => {
//   const brands = await Brand.find();
//   res.status(200).json({
//     success: true,
//     message: "getting brands successfully",
//     brands
//   });
// });

// GET BY ID
// exports.getBrand = asyncHandler(async (req, res) => {
//   const brand = await Brand.findById(req.params.id);
//   if (!brand) {
//     // res.status(404);
//     throw new Error('Brand not found');
//   }
//   res.status(200).json({
//     success: true,
//     message: "getting brand successfully",
//     brand
//   });
// });

// PUT
// exports.updateBrand = asyncHandler(async (req, res) => {
//   const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   if (!brand) {
//     // res.status(404);
//     throw new Error('Brand not found');
//   }
//   res.status(200).json({
//     success: true,
//     message: "Brand updated successfully",
//     brand
//   });
// });

// DELETE BY ID
// exports.deleteBrand = asyncHandler(async (req, res) => {
//   const brand = await Brand.findByIdAndDelete(req.params.id);
//   if (!brand) {
//     // res.status(404);
//     throw new Error('Brand not found');
//   }
//   res.status(200).json({
//     success: true,
//     message: 'Brand deleted successfully',
//     brand
//   });
// });

export {createBrand};