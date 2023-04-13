const fs = require("fs");

const logger = (req, res, next) => {
  fs.appendFileSync(
    "./logs.txt",
    `Route visited : ${req.url} and Method : ${req.method} at ${Date()}\n`
  );
  next();
};
module.exports = { logger: logger };
