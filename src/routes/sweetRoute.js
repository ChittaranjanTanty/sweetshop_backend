const express = require("express");
const upload = require("../middlewares/upload"); // multer-cloudinary config
const {
  createSweet,
  getSweets,
  getSweetById,
  updateSweet,
  deleteSweet
} = require("../controllers/sweetController");

const sweetRouter = express.Router();

// Create sweet (with image)
sweetRouter.post("/", upload.single("image"), createSweet);

// Get all sweets
sweetRouter.get("/", getSweets);

// Get sweet by ID
sweetRouter.get("/:id", getSweetById);

// Update sweet (with optional new image)
sweetRouter.put("/:id", upload.single("image"), updateSweet);

// Delete sweet
sweetRouter.delete("/:id", deleteSweet);

module.exports = sweetRouter;
