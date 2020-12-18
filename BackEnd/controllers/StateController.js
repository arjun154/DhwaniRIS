const State = require("../models/State");

const addState = async (req, res) => {
  const { name } = req.body;

  const state = new State({
    name: name,
  });

  try {
    const newState = await state.save();
    res.status(200).json({ message: "state created successfully", newState });
  } catch (err) {
    res.status(400).json(err);
  }
};

const getState = async (req, res) => {
  try {
    const states = await State.find();
    res.status(200).json(states);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { addState, getState };
