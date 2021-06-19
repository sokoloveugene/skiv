const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");

router.post("/create", async (req, res) => {
  try {
    const orderData = req.body;

    const order = await Order.create(orderData);

    res.status(201);
    res.json({ id: order.id });
  } catch (e) {
    console.log(e);
    res.status(500).json("Something went wrong, please try again");
  }
});

module.exports = router;
