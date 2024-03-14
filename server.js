const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config;
require("./config/db");
const port = process.env.PORT || 3000;

const Routes = require("./routes/studentsRoute");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(Routes);

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
