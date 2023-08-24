const db = require("./db.js");
module.exports = {
  port: process.env.PORT || 3001,
  ...db,
};
