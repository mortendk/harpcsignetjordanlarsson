module.exports = function (collection) {
  return collection.getFilteredByGlob("./src/content/pcpost/**/*.md");
};
