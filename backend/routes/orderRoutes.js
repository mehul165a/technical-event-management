const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const { protect } = require("../middleware/authMiddleware");
const { vendorOnly, adminOnly } = require("../middleware/authMiddleware");
const Product = require("../models/Product");

router.post("/checkout", protect, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

  if (!cart || cart.items.length === 0)
    return res.status(400).json({ message: "Cart is empty" });

  let total = 0;

  cart.items.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  const order = await Order.create({
    user: req.user._id,
    items: cart.items,
    totalAmount: total,
  });

  cart.items = [];
  await cart.save();

  res.json(order);
});

router.get("/myorders", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("items.product");
  res.json(orders);
});

module.exports = router;

router.get("/vendor", protect, vendorOnly, async (req, res) => {
  const vendorProducts = await Product.find({ vendorId: req.user._id });

  const productIds = vendorProducts.map(p => p._id);

  const orders = await Order.find({
    "items.product": { $in: productIds }
  }).populate("items.product user");

  res.json(orders);
});

router.put("/update-status/:id", protect, vendorOnly, async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);

  if (!order)
    return res.status(404).json({ message: "Order not found" });

  order.status = status;
  await order.save();

  res.json(order);
});

router.get("/all", protect, adminOnly, async (req, res) => {
  const orders = await Order.find()
    .populate("items.product")
    .populate("user");

  res.json(orders);
});

