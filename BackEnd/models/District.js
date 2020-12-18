const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DistrictSchema = new Schema(
  {
    name: {
      type: String,
      min: 2,
      required: true,
      unique: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("District", DistrictSchema);
