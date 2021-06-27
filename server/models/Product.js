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
    sizes: {
      type: [sizeSchema],
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
    category: { type: String, required: true },
    additional: [additionalSchema],
  },
  { timestamps: true }
);

schema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "ig") });
};

module.exports = model("Product", schema);
