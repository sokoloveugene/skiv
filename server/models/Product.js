const { Schema, model } = require("mongoose");

const additionalSchema = new Schema({
  title: { type: String, required: true },
  data: [{ type: String, required: true }],
});

const sizeSchema = new Schema({
  title: { type: String, required: true },
  available: { type: Number, default: 0 },
});

const schema = new Schema(
  {
    images: [{ type: String, required: true }],
    tag: { type: String, default: null },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [sizeSchema],
    category: { type: String, required: true },
    additional: [additionalSchema],
  },
  { timestamps: true }
);

module.exports = model("Product", schema);
