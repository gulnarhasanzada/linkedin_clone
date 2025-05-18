const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const addressSchema = require('./Address'); // Assuming Address.js is in the same directory

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

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;
