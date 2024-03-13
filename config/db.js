const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.URI)
      .then(() => console.log("Connected"))
      .catch(() => console.log("ERROR"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB();
