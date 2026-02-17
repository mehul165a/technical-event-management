const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { protect, vendorOnly } = require("../middleware/authMiddleware");

router.post("/add", protect, vendorOnly, async (req, res) => {
  const product = await Product.create({
    ...req.body,
    vendorId: req.user._id
  });

  res.json(product);
});

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
