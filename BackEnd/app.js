const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log("Connection to DB is failed");
    } else {
      console.log("DB is Connected Successfully");
    }
  }
);

app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("Server is up and runnig!");
});
