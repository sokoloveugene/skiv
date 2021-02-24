const { Router } = require("express");
const router = Router();
const Product = require("../models/Product");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    res.status(500).json("Something went wrong, please try again");
  }
});


// @desc    Fetch product by ID
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (product) {
      return res.json(product);
    }

    res.status(404).json({ message: "Product not found" });
  } catch (e) {
    res.status(500).json("Something went wrong, please try again");
  }
});

module.exports = router;
