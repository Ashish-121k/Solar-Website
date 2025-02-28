const Lead = require("../models/Lead");
const Joi = require("joi");

// Validation Schema
const leadSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).allow(""),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(15).required(),
  interest: Joi.string().required(),
  message: Joi.string().max(500).allow(""),
});

// Create a new Lead
exports.createLead = async (req, res) => {
  try {
    const { error } = leadSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all Leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get Lead by ID
exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: "Lead not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update Lead
exports.updateLead = async (req, res) => {
    try {
      const { error } = leadSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });
  
      const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,  // Ensures validation is applied when updating
      });
  
      if (!lead) return res.status(404).json({ error: "Lead not found" });
  
      res.json(lead);
    } catch (err) {
      console.error("❌ Error updating lead:", err);  // Log error to console
      res.status(500).json({ error: "Server error" });
    }
  };
  

// Delete Lead
exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ error: "Lead not found" });

    res.json({ message: "Lead deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
