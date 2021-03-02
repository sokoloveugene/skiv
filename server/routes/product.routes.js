const { Router } = require("express");
const { body, validationResult } = require("express-validator");
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
      const category = product.category;
      const similarProducts = await Product.find({
        _id: { $ne: product._id },
        category,
      }).limit(3);

      return res.json({
        product,
        similarProducts,
      });
    }

    res.status(404).json({ message: "Product not found" });
  } catch (e) {
    res.status(500).json("Something went wrong, please try again");
  }
});

// @desc    Fetch products by category
// @route   GET /api/products/category/:category
// @access  Public
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category.toLocaleLowerCase();

    if (category === "all") {
      const products = await Product.find();
      return res.json(products);
    }
    
    const products = await Product.find({ category });

    return res.json(products);
  } catch (e) {
    res.status(500).json("Something went wrong, please try again");
  }
});

// @desc    Fetch product by array of id (ids: [string])
// @route   POST /api/products/byIds
// @access  Public
router.post(
  "/byIds",
  body("ids").custom((value) => {
    if (!Array.isArray(value)) {
      throw new Error("Bad request");
    }
    if (value.length === 0) {
      throw new Error("At least one id is requred");
    }
    return true;
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { ids } = req.body;

      const records = await Product.find().where("_id").in(ids).exec();

      if (records) {
        return res.json(records);
      }
    } catch (e) {
      res.status(500).json("Something went wrong, please try again");
    }
  }
);

// @desc    Fetch products by ({ search: string })
// @route   POST /api/products/find
// @access  Public
router.post("/find", async (req, res) => {
  try {
    const { search } = req.body;
    const regex = new RegExp(search, "ig");
    const products = await Product.find({ name: regex });
    res.json(products);
  } catch (e) {
    res.status(500).json("Something went wrong, please try again");
  }
});

module.exports = router;
