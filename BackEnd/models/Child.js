const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const ChildSchema = new Schema({
  name: {
    type: String,
    min: 3,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  fatherName: {
    type: String,
    min: 3,
    required: true,
  },
  motherName: {
    type: String,
    min: 3,
    required: true,
  },
  state: {
    type: String,
    min: 2,
    required: true,
  },
  district: {
    type: String,
    min: 2,
    required: true,
  },
});

module.exports = mongoose.model("Child", ChildSchema);
