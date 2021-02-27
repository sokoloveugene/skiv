const { Schema, model } = require("mongoose");

const additionalSchema = new Schema({
  title: { type: String, required: true },
  data: [{ type: String }],
});

const sizeSchema = new Schema({
  title: { type: String, required: true },
  available: { type: Number, default: 0 },
});

const schema = new Schema({
  image: [{ type: String, required: true }],
  tag: { type: String, default: null },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  price_old: { type: Number, default: null },
  sizes: [sizeSchema],
  description: {
    type: String,
    required: true,
  },
  category: { type: String, required: true },
  additional: [additionalSchema],
});

module.exports = model("Product", schema);
