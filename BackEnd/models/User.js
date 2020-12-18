const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      min: 3,
      required: true,
    },
    organization: {
      type: String,
      min: 4,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      min: 3,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
