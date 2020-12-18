const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const childRoutes = require("./routes/ChildRoutes");
const stateRoutes = require("./routes/StateRoutes");
const districtRoutes = require("./routes/DistrictRoutes");
const userRoutes = require("./routes/UserRoutes");

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

app.use("/api/V1/district", districtRoutes);
app.use("/api/V1/state", stateRoutes);
app.use("/api/V1/beneficiary", childRoutes);
app.use("/api/V1/user", userRoutes);

app.listen(8000, () => {
  console.log("Server is up and runnig!");
});
