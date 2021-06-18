const fs = require("fs");
const path = require("path");

const checkImageFolder = () => {
  const imgPath = path.join(process.cwd(), "images");
  if (!fs.existsSync(imgPath)) {
    fs.mkdirSync(imgPath);
  }
};

module.exports = checkImageFolder;
