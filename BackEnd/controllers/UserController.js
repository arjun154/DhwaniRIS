const User = require("../models/User");
const bcrypt = require("bcrypt");

const {
  registerValidation,
  loginValidation,
} = require("../validation/userValidation");

const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const userExists = await User.findOne({ username: req.body.username });
  if (userExists) {
    return res
      .status(400)
      .json({ message: "user already exists in the database" });
  }

  const { name, organization, designation, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

  const user = new User({
    name: name,
    organization: organization,
    designation: designation,
    username: username,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.json({ message: "User Added to the database successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
};

const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({ message: "username or password is wrong" });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }

  res.json({
    message: "user login successful",
    name: user.name,
    organization: user.organization,
    designation: user.designation,
  });
};

module.exports = { register, login };
