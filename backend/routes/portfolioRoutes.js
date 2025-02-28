const express = require("express");
const mongoose = require("mongoose");
const { upload, getGridFSBucket } = require("../config/gridfsConfig");
const Portfolio = require("../models/Portfolio");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @route   POST /api/portfolio/create
 * @desc    Create a new portfolio item (Admin Only)
 * @access  Admin
 */
router.post("/create", authMiddleware(["admin"]), upload.single("image"), async (req, res) => {
  try {
    console.log("📥 Received Request:", req.body);

    if (!req.file) {
      console.log("❌ No file uploaded.");
      return res.status(400).json({ msg: "No file uploaded" });
    }

    console.log("✅ File received:", req.file.originalname);

    // Get GridFSBucket instance
    let gridfsBucket;
    try {
      gridfsBucket = getGridFSBucket();
    } catch (error) {
      console.error("❌ GridFSBucket is not initialized:", error.message);
      return res.status(500).json({ msg: "File storage system is not ready. Try again later." });
    }

    console.log("🔍 GridFSBucket instance is valid.");

    // Upload file to GridFSBucket
    const uploadStream = gridfsBucket.openUploadStream(req.file.originalname, {
      contentType: req.file.mimetype,
    });

    console.log("⏳ Starting file upload...");

    uploadStream.end(req.file.buffer);

    // Wait for upload completion
    const uploadedFile = await new Promise((resolve, reject) => {
      uploadStream.on("finish", () => {
        console.log("✅ File uploaded successfully:", req.file.originalname);
        resolve(req.file.originalname);
      });

      uploadStream.on("error", (err) => {
        console.error("❌ Error uploading file:", err);
        reject(err);
      });
    });

    if (!uploadedFile) {
      console.log("❌ File upload failed.");
      return res.status(500).json({ msg: "File upload failed" });
    }

    console.log("✅ File uploaded successfully:", uploadedFile);

    // Save the portfolio entry with the uploaded image filename
    const newPortfolio = new Portfolio({
      title: req.body.title,
      description: req.body.description,
      image: uploadedFile,
      tags: req.body.tags ? req.body.tags.split(",") : [],
    });

    await newPortfolio.save();
    res.status(201).json({ msg: "Portfolio created successfully", portfolio: newPortfolio });
  } catch (error) {
    console.error("❌ Error creating portfolio:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

/**
 * @route   GET /api/portfolio/getAll
 * @desc    Get all portfolio items
 * @access  Public
 */
router.get("/getAll", async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

/**
 * @route   GET /api/portfolio/image/:filename
 * @desc    Fetch an image from GridFS
 * @access  Public
 */
router.get("/image/:filename", async (req, res) => {
  try {
    const file = await mongoose.connection.db
      .collection("uploads.files")
      .findOne({ filename: req.params.filename });

    if (!file) return res.status(404).json({ msg: "File not found" });

    const gridFSBucket = getGridFSBucket(); // Get GridFSBucket instance
    const readStream = gridFSBucket.openDownloadStreamByName(req.params.filename);
    
    res.set("Content-Type", file.contentType);
    readStream.pipe(res);
  } catch (error) {
    console.error("Error retrieving image:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});


/**
 * @route   PUT /api/portfolio/update/:id
 * @desc    Update a portfolio item (Admin Only)
 * @access  Admin
 */
router.put("/update/:id", authMiddleware(["admin"]), upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags ? req.body.tags.split(",") : [],
    };

    if (req.file) {
      let gridfsBucket;
      try {
        gridfsBucket = getGridFSBucket();
      } catch (error) {
        console.error("❌ GridFSBucket is not initialized:", error.message);
        return res.status(500).json({ msg: "File storage system is not ready. Try again later." });
      }
  
      console.log("🔍 GridFSBucket instance is valid.");
  
      // Upload file to GridFSBucket
      const uploadStream = gridfsBucket.openUploadStream(req.file.originalname, {
        contentType: req.file.mimetype,
      });
  
      console.log("⏳ Starting file upload...");
  
      uploadStream.end(req.file.buffer);
  
      // Wait for upload completion
      const uploadedFile = await new Promise((resolve, reject) => {
        uploadStream.on("finish", () => {
          console.log("✅ File uploaded successfully:", req.file.originalname);
          resolve(req.file.originalname);
        });
  
        uploadStream.on("error", (err) => {
          console.error("❌ Error uploading file:", err);
          reject(err);
        });
      });
  
      if (!uploadedFile) {
        console.log("❌ File upload failed.");
        return res.status(500).json({ msg: "File upload failed" });
      }
  
      console.log("✅ File uploaded successfully:", uploadedFile);
      console.log("updateData",uploadedFile)

      updateData.image = uploadedFile; // Update image filename

    }

    console.log("updateData",updateData)
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    console.log("✅ Updated portfolio:", updatedPortfolio);
    
    if (!updatedPortfolio) return res.status(404).json({ msg: "Portfolio item not found" });

    res.status(200).json({ msg: "Portfolio updated successfully", portfolio: updatedPortfolio });
  } catch (error) {
    console.error("Error updating portfolio:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

/**
 * @route   DELETE /api/portfolio/delete/:id
 * @desc    Delete a portfolio item (Admin Only)
 * @access  Admin
 */
router.delete("/delete/:id", authMiddleware(["admin"]), async (req, res) => {
  try {
    const deletedPortfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!deletedPortfolio) return res.status(404).json({ msg: "Portfolio item not found" });

    console.log("✅ Deleting Image:", deletedPortfolio.image);

    const file = await mongoose.connection.db.collection("uploads.files").findOne({ filename: deletedPortfolio.image });
    if (file) {
      await getGridFSBucket.delete(file._id);
      console.log("✅ Image deleted from GridFS:", deletedPortfolio.image);
    }

    res.status(200).json({ msg: "Portfolio deleted" });
  } catch (error) {
    console.error("Error deleting portfolio:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

module.exports = router;
