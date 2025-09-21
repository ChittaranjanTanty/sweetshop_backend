const Sweet = require("../schema/sweetSchema");
const BadRequestError = require("../utils/badRequestError");
const InternalServerError = require("../utils/internalServerError");

async function createSweet(sweetDetails) {
    try {
        const response = await Sweet.create(sweetDetails);
        return response;
    } catch (error) {
        if (error.name === "ValidationError") {
            const errorMessageList = Object.keys(error.errors).map((property) => {
                return error.errors[property].message;
            });
            throw new BadRequestError(errorMessageList);
        }
        throw new InternalServerError();
    }
}

async function getAllSweets() {
    try {
        return await Sweet.find({});
    } catch (error) {
        throw new InternalServerError();
    }
}

async function getSweetById(id) {
    try {
        return await Sweet.findById(id);
    } catch (error) {
        throw new InternalServerError();
    }
}

async function updateSweet(id, updateData) {
    try {
        return await Sweet.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
        throw new InternalServerError();
    }
}

async function deleteSweet(id) {
    try {
        return await Sweet.findByIdAndDelete(id);
    } catch (error) {
        throw new InternalServerError();
    }
}

module.exports = {
    createSweet,
    getAllSweets,
    getSweetById,
    updateSweet,
    deleteSweet,
};

