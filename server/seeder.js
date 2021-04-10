const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = require("./helpers/db");
const Product = require("./models/Product");

connectDB();

const products = [
  {
    images: [
      "https://img.loveandlive.ua/r/CA8uoi2p01c/fit/640/640/ce/1/plain/images/products/1/7304/327007368/2H2A4904-min.jpg",
      "https://img.loveandlive.ua/images/products/1/7303/327007367/2H2A4892-min.jpg",
      "https://img.loveandlive.ua/images/products/1/7302/327007366/2H2A4889-min.jpg",
    ],
    tag: "new",
    name: "Сукня комбінація",
    price: 1020,
    sizes: [
      { title: "XS", available: 10 },
      { title: "S", available: 10 },
      { title: "XXL" },
    ],
    category: "dress",
    additional: [
      {
        title: "Склад виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
      {
        title: "Обміри виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
    ],
  },
  {
    images: [
      "https://img.loveandlive.ua/r/mCGzCMjxslU/fit/640/640/ce/1/plain/images/products/1/3603/367054355/IMG_3686.jpg",
      "https://img.loveandlive.ua/images/products/1/3598/367054350/IMG_3672.jpg",
      "https://img.loveandlive.ua/images/products/1/3599/367054351/IMG_3673.jpg",
      "https://img.loveandlive.ua/images/products/1/3600/367054352/IMG_3680.jpg",
    ],
    name: "Пальто класичне",
    price: 1199,
    sizes: [
      { title: "S", available: 1 },
      { title: "M", available: 10 },
      { title: "L", available: 3 },
    ],
    category: "jackets",
    additional: [
      {
        title: "Склад виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
      {
        title: "Обміри виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
    ],
  },
  {
    images: [
      "https://img.loveandlive.ua/r/r_ZdTvWRJz4/fit/640/640/ce/1/plain/images/products/1/1665/381847169/LL4-05757.01-20__1_.jpg",
      "https://img.loveandlive.ua/images/products/1/1667/381847171/LL4-05757.01-20__3_.jpg",
      "https://img.loveandlive.ua/images/products/1/1668/381847172/LL4-05757.01-20__4_.jpg",
    ],
    name: "Брюки-банани",
    price: 2100,
    sizes: [
      { title: "S", available: 1 },
      { title: "M", available: 10 },
      { title: "L", available: 3 },
    ],
    category: "jeans",
    additional: [
      {
        title: "Склад виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
      {
        title: "Обміри виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
    ],
  },
  {
    images: [
      "https://img.loveandlive.ua/r/S97m6t5q88U/fit/640/640/ce/1/plain/images/products/1/5335/366703831/IMG_3149.jpg",
      "https://img.loveandlive.ua/images/products/1/5333/366703829/IMG_3139.jpg",
      "https://img.loveandlive.ua/images/products/1/5334/366703830/IMG_3148.jpg",
    ],
    name: "Брюки з еко-шкіри",
    price: 699,
    sizes: [
      { title: "S", available: 1 },
      { title: "M", available: 10 },
      { title: "L", available: 3 },
    ],
    category: "jeans",
    additional: [
      {
        title: "Склад виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
      {
        title: "Обміри виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
    ],
  },
  {
    images: [
      "https://img.loveandlive.ua/r/0f70kFGaKjU/fit/640/640/ce/1/plain/images/products/1/1931/409388939/3N7A0659.jpg",
      "https://img.loveandlive.ua/images/products/1/1930/409388938/3N7A0652.jpg",
      "https://img.loveandlive.ua/images/products/1/1932/409388940/3N7A0662.jpg",
    ],
    name: "Топ фіалковий",
    price: 300,
    sizes: [
      { title: "S", available: 1 },
      { title: "M", available: 10 },
      { title: "L", available: 3 },
    ],
    category: "shirts",
    additional: [
      {
        title: "Склад виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
      {
        title: "Обміри виробу",
        data: [
          "Довжина виробу: 114 см",
          "Обхват грудей: 124 см",
          "Обхват стегон: 120 см",
          "Довжина рукава: 64 см",
        ],
      },
    ],
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
