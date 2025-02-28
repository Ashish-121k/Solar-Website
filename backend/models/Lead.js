const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    interest: { type: String, required: true },
    message: { type: String, maxLength: 500 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
