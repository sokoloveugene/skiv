module.exports = {
  extends: "airbnb-typescript-prettier",
  rules: {
    "no-underscore-dangle": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
