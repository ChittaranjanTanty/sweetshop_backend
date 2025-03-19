const mongoose = require('mongoose');
const argon2 = require('argon2');  // Use argon2 for hashing
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, // if the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    lastName: {
        type: String,
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, // if the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    mobileNumber: {
        type: String,
        trim: true,
        maxlength: [10, "Phone number should be of length 10"],
        minlength: [10, "Phone number should be of length 10"],
        unique: [true, "Phone number is already in use"],
        required: [true, "Phone number should be provided"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email should be provided"],
        unique: [true, "Email is already in use"],
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password should be provided"],
        minlength: [6, "Password should be minimum 6 characters long"]
    },
    role: {
        type: String,
        enum: ["SOFFICER", "SUPERVISOR", "MANAGER"],
        required:[true,"role is required"]
    },
    address: {
        type: String
    }
}, {
    timestamps: true
});

// Hash the password before saving
userSchema.pre('save', async function () {
    if (this.isModified('password')) {  // Only hash if password is modified
        const hashedPassword = await argon2.hash(this.password);  // Using argon2 to hash password
        this.password = hashedPassword;
    }
});

const User = mongoose.model("User", userSchema); // collection

module.exports = User;
