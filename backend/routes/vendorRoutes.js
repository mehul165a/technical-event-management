const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, adminOnly, async (req, res) => {
  const vendors = await User.find({ role: "vendor" }).select("-password");
  res.json(vendors);
});

module.exports = router;
