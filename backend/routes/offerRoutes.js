const express = require("express");
const Offer = require("../models/Offer");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @route   POST /api/offers
 * @desc    Create a new offer (Admin Only)
 * @access  Admin
 */
router.post("/", authMiddleware(["admin"]), async (req, res) => {
  try {
    const { badge, tcApply, title, discount, description, features } = req.body;

    const newOffer = new Offer({
      badge,
      tcApply,
      title,
      discount,
      description,
      features,
    });

    await newOffer.save();
    res.status(201).json({ msg: "Offer created successfully", offer: newOffer });
  } catch (error) {
    console.error("Error creating offer:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

/**
 * @route   GET /api/offers
 * @desc    Get all offers
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

/**
 * @route   GET /api/offers/:id
 * @desc    Get a single offer by ID
 * @access  Public
 */
router.get("/:id", async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.status(404).json({ msg: "Offer not found" });

    res.status(200).json(offer);
  } catch (error) {
    console.error("Error fetching offer:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

/**
 * @route   PUT /api/offers/:id
 * @desc    Update an offer (Admin Only)
 * @access  Admin
 */
router.put("/:id", authMiddleware(["admin"]), async (req, res) => {
  try {
    const { badge, tcApply, title, discount, description, features } = req.body;

    const updatedOffer = await Offer.findByIdAndUpdate(
      req.params.id,
      { badge, tcApply, title, discount, description, features },
      { new: true }
    );

    if (!updatedOffer) return res.status(404).json({ msg: "Offer not found" });

    res.status(200).json({ msg: "Offer updated successfully", offer: updatedOffer });
  } catch (error) {
    console.error("Error updating offer:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

/**
 * @route   DELETE /api/offers/:id
 * @desc    Delete an offer (Admin Only)
 * @access  Admin
 */
router.delete("/:id", authMiddleware(["admin"]), async (req, res) => {
  try {
    const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deletedOffer) return res.status(404).json({ msg: "Offer not found" });

    res.status(200).json({ msg: "Offer deleted successfully" });
  } catch (error) {
    console.error("Error deleting offer:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

module.exports = router;
