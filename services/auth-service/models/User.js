import mongoose from "mongoose";
import addressSchema from "./Address.js";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    phoneNumber: {
        type: String,
    },
    location: {
        type: addressSchema,
    },
    profilePicture: {
        type: String,
        default: ''
    },
    headline: {
        type: String,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
