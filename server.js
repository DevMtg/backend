const dotenv = require("dotenv");
const path = require("path");
const app = require("./app");

dotenv.config({ path: "./config/config.env" });

const server = app.listen(
  process.env.PORT,
  console.log("Express server working...")
);
