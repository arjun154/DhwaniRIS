const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StateSchema = new Schema(
  {
    name: {
      type: String,
      min: 3,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("State", StateSchema);
