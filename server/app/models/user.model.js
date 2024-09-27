// server\app\models\user.model.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
    {

        username: {
            type: String,
            required: [true, 'Username is required'],
            trim: true,
            minlength: [2, 'Username must be at least 2 characters long'],
            maxlength: [100, 'Username cannot exceed 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            minlength: [5, 'Email must be at least 5 characters long'],
            maxlength: [100, 'Email cannot exceed 100 characters'],
            unique: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: props => `${props.value} is not a valid email address!`
            }
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters long'],
            trim: true,
        },
        profilePhoto: {
            type: Object,
            default: {
                url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
                publicId: null,
            }
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isAccountVerified: {
            type: Boolean,
            default: false,
        },
        // cart: { type: Array, default: [] },
    },
    {
        timestamps: true,
        // toJSON: { virtuals: true },
        // toObject: { virtuals: true }    
    }
);

// Pre-save hook to hash the password before saving the user
userSchema.pre("save", async function (next) {

    // Checks whether the password has been changed or is new
    // If the password is not changed, go to the next step
    if (!this.isModified("password")) return next();

    // hash the password
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

    } catch (error) {
        next();
    }
});

// Compare user's password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User