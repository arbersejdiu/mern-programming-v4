const express = require("express");
const app = express();
require("dotenv").config;
require("./config/db");

// PORT CONFIGURE
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
