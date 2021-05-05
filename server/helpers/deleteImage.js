const fs = require("fs");
const path = require("path");

const deleteImage = (url) => {
  const pathUrl = path.join(process.cwd(), url);

  fs.unlink(pathUrl, (err) => {
    if (err) {
      return console.log(err, url);
    }
    console.log(url, "was deleted");
  });
};

module.exports = deleteImage;
