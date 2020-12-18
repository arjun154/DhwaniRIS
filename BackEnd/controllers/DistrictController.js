const District = require("../models/District");

const addDistrict = async (req, res) => {
  const { state, name } = req.body;

  const district = new District({
    name: name,
    state: state,
  });

  try {
    const newDistrict = await district.save();
    res
      .status(200)
      .json({ message: "District created successfully", newDistrict });
  } catch (err) {
    res.status(400).json(err);
  }
};

const getDistrictlist = async (req, res) => {
  try {
    const district = await District.find();
    res.status(200).json(district);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getDistrictlist, addDistrict };
