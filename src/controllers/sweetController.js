const {
  createSweetService,
  getSweetsService,
  getSweetByIdService,
  updateSweetService,
  deleteSweetService
} = require("../services/sweetService");

async function createSweet(req, res) {
  try {
    // multer + cloudinary stores the uploaded file, so req.file.path = image URL
    const sweetDetails = {
      ...req.body,
      imageUrl: req.file?.path // Cloudinary gives secure_url as "path"
    };

    const response = await createSweetService(sweetDetails);

    return res.status(201).json({
      success: true,
      message: "Sweet created successfully",
      data: response,
      error: {}
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to create sweet",
      data: {},
      error
    });
  }
}

async function getSweets(req, res) {
  try {
    const response = await getSweetsService();
    return res.status(200).json({
      success: true,
      message: "Sweets fetched successfully",
      data: response,
      error: {}
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to fetch sweets",
      data: {},
      error
    });
  }
}

async function getSweetById(req, res) {
  try {
    const response = await getSweetByIdService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Sweet fetched successfully",
      data: response,
      error: {}
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to fetch sweet",
      data: {},
      error
    });
  }
}

async function updateSweet(req, res) {
  try {
    const updateData = { ...req.body };

    // if new image is uploaded, update imageUrl too
    if (req.file) {
      updateData.imageUrl = req.file.path;
    }

    const response = await updateSweetService(req.params.id, updateData);

    return res.status(200).json({
      success: true,
      message: "Sweet updated successfully",
      data: response,
      error: {}
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to update sweet",
      data: {},
      error
    });
  }
}

async function deleteSweet(req, res) {
  try {
    const response = await deleteSweetService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Sweet deleted successfully",
      data: response,
      error: {}
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to delete sweet",
      data: {},
      error
    });
  }
}

module.exports = {
  createSweet,
  getSweets,
  getSweetById,
  updateSweet,
  deleteSweet
};
