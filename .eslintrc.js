module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  globals: {
    App: "readonly",
    Component: "readonly",
    getApp: "readonly",
    getCurrentPages: "readonly",
    Page: "readonly",
    wx: "readonly"
  }
};
