const express = require("express");
const app = express();
const config = require("config");
const cors = require("cors");
const colors = require("colors");

const connectDB = require("./helpers/db");

connectDB();

app.use(cors());
app.use(express.json());

// app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/products", require("./routes/product.routes"));

const PORT = config.get("PORT") || 5000;
app.listen(PORT, () => console.log(`App has been started at port ${PORT}`));

