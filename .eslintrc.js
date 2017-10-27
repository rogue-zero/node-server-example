module.exports = {
  env: { jest: true },
  plugins: ["prettier"],
  extends: ["airbnb-base", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
