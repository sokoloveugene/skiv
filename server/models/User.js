const { Schema, model } = require("mongoose");
const crypto = require("crypto");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: {
    type: String,
    required: true,
  },
  salt: {
    required: true,
    type: String,
  },
});

function generatePassword(salt, password) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, key) => {
      if (err) return reject(err);
      resolve(key.toString("hex"));
    });
  });
}

schema.methods.setPassword = async function setPassword(password) {
  this.salt = crypto.randomBytes(256).toString("hex");
  this.passwordHash = await generatePassword(this.salt, password);
};

schema.methods.checkPassword = async function (password) {
  const hash = await generatePassword(this.salt, password);
  return hash === this.passwordHash;
};

module.exports = model("User", schema);
