const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
  {
    badge: {
      type: String,
      default: null, // e.g. "Most Popular"
    },
    tcApply: {
      type: String,
      default: null, // e.g. "T&C Apply"
    },
    title: {
      type: String,
      required: true, // e.g. "Early Bird Special"
    },
    discount: {
      type: String,
      default: null, // e.g. "50% OFF"
    },
    description: {
      type: String,
      default: null, // e.g. "Installation costs when you sign up before month end"
    },
    features: {
      type: [String], // e.g. ["Free Site Survey", "Priority Installation", "Extended Warranty"]
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offer", OfferSchema);
