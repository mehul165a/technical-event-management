const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect, adminOnly } = require("../middleware/authMiddleware");


router.get("/vendors", protect, adminOnly, async (req, res) => {
  const vendors = await User.find({ role: "vendor" });
  res.json(vendors);
});


router.put("/approve/:id", protect, adminOnly, async (req, res) => {
  const vendor = await User.findById(req.params.id);

  if (!vendor)
    return res.status(404).json({ message: "Vendor not found" });

  vendor.approved = true;
  await vendor.save();

  res.json({ message: "Vendor approved" });
});

module.exports = router;
