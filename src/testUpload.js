// testUpload.js
const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const app = express();

// Manually add your Cloudinary credentials
cloudinary.config({
  cloud_name: 'chittaranjan',  // replace with your Cloudinary cloud name
  api_key: '789838827518791',        // replace with your Cloudinary API key
  api_secret: '2MQbZhHWCyy4WUntFj6hFYljNFw',  // replace with your Cloudinary API secret

});

// Multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'sweet-shop',           // folder in Cloudinary
    allowed_formats: ['jpg','jpeg','png','webp'],
  },
});

const upload = multer({ storage });

// Upload route
app.post('/test-upload', upload.single('image'), (req, res) => {
  try {
    console.log(req.file); // Cloudinary response
    res.json({
      message: 'File uploaded successfully!',
      file: req.file,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Upload failed', error });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

