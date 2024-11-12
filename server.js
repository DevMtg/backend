const dotenv = require("dotenv");
const path = require("path");
const app = require("./app");
const connectDatabase = require("./db/Database");

dotenv.config({ path: "./config/config.env" });

connectDatabase();

const server = app.listen(
  process.env.PORT,
  console.log("Express server working...")
);
