const Child = require("../models/Child");
const mongoose = require("mongoose");

const addChild = async (req, res) => {
  const { name, sex, DOB, fatherName, motherName, state, district } = req.body;

  const child = new Child({
    name: name,
    sex: sex,
    DOB: DOB,
    fatherName: fatherName,
    motherName: motherName,
    state: state,
    district: district,
  });

  try {
    const newChild = await child.save();
    res.status(200).json(newChild);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getChildlist = async (req, res) => {
  const { pageNo } = req.query;
  const page = Number(pageNo);

  try {
    let limit = 4;
    const children = await Child.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const docCount = await Child.countDocuments().exec();
    const total = Math.ceil(docCount / limit);

    res.status(200).json({
      data: children,
      count: docCount,
      totalPages: total,
      currentPage: page,
      limit: limit,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const getChildById = async (req, res) => {
  const { id } = req.params;

  try {
    const child = await Child.find({ _id: mongoose.Types.ObjectId(id) });
    res.status(200).json(child);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports = { addChild, getChildlist, getChildById };
