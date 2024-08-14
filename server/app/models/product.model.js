import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required !"]
        },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BrandModel',
            required: [true, "This Brand must be belong to brand"]
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CategoryModel',
            required: [true, "This Category must be belong to category"]
        },
        price: {
            type: Number,
            required: [true, "Price must be a number and required !"]
        },
        countInStock: {
            type: Number,
            required: [true, "Quantity must be a number and required !"],
            default: 0,
        },
        imagesUrl: {
            type: String,
            // type: Array,
            // required: [true, "Product must have at least one image"]
        },
        // reviews
        // rating
        // numReviews

    },
    {
        timestamps: true
    }
);

// productSchema.method("toJSON", function(){
//     const { _id, __v, ...object } = this.toObject();

//     object.id = _id;

//     return object;
// });

const Product = mongoose.model("Product", productSchema);

export default Product;