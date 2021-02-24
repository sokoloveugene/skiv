const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("mongoURL"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("Database connected".brightGreen.inverse);
  } catch (e) {
    console.error(`Database connection fail ${e.message}`.brightRed.inverse);
    process.exit(1);
  }
};

module.exports = connectDB;
