module.exports = function (collection) {
  return collection.getFilteredByGlob("./src/content/styleguide/**/*.njk");
};
