const mongoose = require('mongoose');

const sweetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Sweet name is required"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be negative"]
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required"]
    }
}, {
    timestamps: true
});

const Sweet = mongoose.model("Sweet", sweetSchema);
module.exports = Sweet;
