const { Schema, model } = require("mongoose");

const sizeSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  ordered: { type: Number, required: true },
});

const schema = new Schema(
  {
    address: { type: String, required: true },
    callMeBack: { type: Boolean, default: false },
    mailing: { type: Boolean, default: false },
    delivery: {
      type: String,
      required: true,
      enum: ["address delivery", "nova poshta"],
    },
    payment: {
      type: String,
      required: true,
      enum: ["card", "payment on delivery"],
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\+380\d{9}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    status: { type: String, default: "new" },
    products: {
      type: [
        {
          _id: { type: Schema.Types.ObjectId, required: true },
          sizes: [sizeSchema],
        },
      ],
      required: true,
      validate: {
        validator: function (v) {
          return v.length;
        },
        message: (props) => `${props.value} order should have products`,
      },
    },
  },
  { timestamps: true }
);

module.exports = model("Order", schema);
