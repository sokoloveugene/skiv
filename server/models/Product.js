const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    name: { type: String, required: true, default: "Guest" },
    rating: { type: Number, required: true },
    comment: {
      type: String,
      required: true,
      default: "Guest",
    },
  },
  {
    timestamps: true,
  }
);

const schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, default: null },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  rewievs: [reviewSchema],
});

module.exports = model("Product", schema);
