const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const config = require("config");
const cors = require("cors");
const passport = require("passport");
const path = require("path");
const colors = require("colors");

const connectDB = require("./helpers/db");
const checkImageFolder = require("./helpers/checkImageFolder");

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: config.get("mongoURL"), ttl: 3600 }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/products", require("./routes/product.routes"));

const PORT = config.get("PORT") || 5000;
app.listen(PORT, () => {
  checkImageFolder();
  console.log(`App has been started at port ${PORT}`)
});
