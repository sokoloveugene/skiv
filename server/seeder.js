const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = require("./helpers/db");
const Product = require("./models/Product");

connectDB();

const products = [
  {
    name: "Сукня комбінація",
    category: "New",
    price: 100,
    image:
      "https://img.loveandlive.ua/r/7DMfiqKHiwo/fit/640/640/ce/1/plain/images/products/1/4530/349122994/2H2A8460.jpg",
    description: "Сукня міді м'ятна з довгим рукавом Love&Live",
    rating: 4,
    countInStock: 3,
    reviews: [],
  },
  {
    name: "Product 2",
    category: "New",
    price: 20,
    image:
      "https://www.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/X/N/XN181-99X-001_2.jpg",
    description: "Штани карго",
    rating: 3,
    countInStock: 10,
    reviews: [],
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Data imported".brightGreen.inverse);
    process.exit();
  } catch (error) {
    console.error(`Data import error ${error.message}`.brightRed.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    
    console.log("Data destroyed".brightGreen.inverse);
    process.exit();
  } catch (error) {
    console.error(`Data destroy error ${error.message}`.brightRed.inverse);
    process.exit(1);
  }
};

// process.argv = [
//   ("/Users/learnmore/.nvm/versions/node/v12.0.0/bin/node",
//   "/Users/learnmore/Desktop/skiv/server/seeder.js",
//   "-d")
// ]

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
