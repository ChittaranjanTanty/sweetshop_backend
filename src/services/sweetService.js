const sweetRepository = require("../repositories/sweetRepository");

async function createSweetService(sweetDetails) {
    return await sweetRepository.createSweet(sweetDetails);
}

async function getSweetsService() {
    return await sweetRepository.getAllSweets();
}

async function getSweetByIdService(id) {
    const sweet = await sweetRepository.getSweetById(id);
    if (!sweet) {
        throw { message: "Sweet not found", statusCode: 404 };
    }
    return sweet;
}

async function updateSweetService(id, updateData) {
    const updated = await sweetRepository.updateSweet(id, updateData);
    if (!updated) {
        throw { message: "Sweet not found", statusCode: 404 };
    }
    return updated;
}

async function deleteSweetService(id) {
    const deleted = await sweetRepository.deleteSweet(id);
    if (!deleted) {
        throw { message: "Sweet not found", statusCode: 404 };
    }
    return deleted;
}

module.exports = {
    createSweetService,
    getSweetsService,
    getSweetByIdService,
    updateSweetService,
    deleteSweetService,
};
