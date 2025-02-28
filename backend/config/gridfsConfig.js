const mongoose = require("mongoose");
const multer = require("multer");

// GridFSBucket instance
let gridfsBucket = null;

mongoose.connection.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "uploads",
  });
  console.log("✅ GridFSBucket Initialized");
});

// Function to return the GridFSBucket instance
const getGridFSBucket = () => {
  if (!gridfsBucket) {
    throw new Error("GridFSBucket is not initialized yet.");
  }
  return gridfsBucket;
};

// Configure Multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = { getGridFSBucket, upload };
