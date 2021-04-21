const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  const whiteList = ["image/png", "image/jpg", "image/jpeg"];
  whiteList.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

const upload = multer({ storage: fileStorage, fileFilter }).array("images");

module.exports = upload;
