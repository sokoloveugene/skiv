const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const upload = require("../helpers/multer");
const authProtected = require("../helpers/authProtected");
const deleteImage = require("../helpers/deleteImage");
const router = Router();
const Product = require("../models/Product");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
      .select("tag price name images")
      .lean();

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
    const product = await Product.findById(id).lean();

    if (product) {
      const category = product.category;
      const similarProducts = await Product.find({
        _id: { $ne: product._id },
        category,
      })
        .limit(3)
        .select("tag price name images")
        .lean();

      return res.json({
        product,
        similarProducts,
      });
    }

    res.status(404).json({ message: "Product not found" });
  } catch (e) {
    console.log(e);
    res.status(500).json("Something went wrong, please try again");
  }
});

// @desc    Fetch products by { category: string, sortBy: string }
// @route   POST /api/products/category/:category
// @access  Public
router.post("/catalog", async (req, res) => {
  try {
    const { category, sortBy } = req.body;

    const getSortOption = (sortBy) => {
      switch (sortBy) {
        case "price-high":
          return { price: -1 };
        case "price-low":
          return { price: 1 };
        default:
          return { createdAt: "desc" };
      }
    };

    const products = await Product.findByCategory(category)
      .sort(getSortOption(sortBy))
      .select("tag price name images")
      .lean();

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
    return true;
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { ids } = req.body;

      const records = await Product.find().byIds(ids);

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
    const products = await Product.findByName(search)
      .select("tag price name images")
      .lean();

    res.json(products);
  } catch (e) {
    res.status(500).json("Something went wrong, please try again");
  }
});

// @desc    Create new product
// @route   POST /api/products/createProduct
// @access  Private
router.post("/createProduct", authProtected, upload, async (req, res) => {
  try {
    if (!req.files.length) {
      // no accepted files
      res.status(400);
      res.json("Invalid formData");
      return;
    }

    const newProduct = req.body;

    Object.keys(newProduct).forEach((key) => {
      newProduct[key] = JSON.parse(newProduct[key]);
    });

    newProduct.images = [];
    req.files.map((file) => newProduct.images.push(`/${file.path}`));

    const product = await Product.create(newProduct);
    res.status(201);
    res.json({ id: product.id });
  } catch (e) {
    res.status(500).json("Something went wrong, please try again");
  }
});

// @desc    Update product
// @route   POST /api/products/update/:id
// @access  Private
router.put("/update/:id", authProtected, upload, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    const updatedProduct = req.body;

    Object.keys(updatedProduct).forEach((key) => {
      updatedProduct[key] = JSON.parse(updatedProduct[key]);
    });

    const deletedUrls = updatedProduct.deletedUrls || [];

    deletedUrls.forEach(deleteImage);

    delete updatedProduct.deletedUrls;

    updatedProduct.images = product.images.filter(
      (url) => !deletedUrls.includes(url)
    );

    req.files.map((file) => updatedProduct.images.push(`/${file.path}`));

    product.overwrite(updatedProduct);
    await product.save();

    res.json("OK");
  } catch (e) {
    console.log(e);
    res.status(500).json("Something went wrong, please try again");
  }
});

module.exports = router;
