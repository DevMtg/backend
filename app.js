const express = require("express");
const dotenv = require("dotenv");
const Errorhandler = require("./utils/Errorhandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

dotenv.config({ path: "./config/config.env" });

app.use(Errorhandler);

module.exports = app;
