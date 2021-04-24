const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  target: "serverless",
  strict: true,
  reactStrictMode: true,
  trailingSlash: true,
});
