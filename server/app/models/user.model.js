import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {

        name: { type: String, required: true },
        imageProfile: {
            type: Object,
            default: {
                url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
                publicId: null,
            }
        },
        // email: { type: String, required: true, unique: true },
        // password: { type: String, required: true },
        // role: { type: String, default: 'user' },
        // cart: { type: Array, default: [] },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
export default User