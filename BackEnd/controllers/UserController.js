const User = require("../models/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const express = require("express");
const {
  registerValidation,
  loginValidation,
} = require("../validation/userValidation");

const blackList = [];

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
    res
      .status(200)
      .json({ message: "User Added to the database successfully" });
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

  const accessToken = JWT.sign(
    { name: req.body.username },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({
    message: "user login successful",
    token: accessToken,
    name: user.name,
    organization: user.organization,
    designation: user.designation,
  });
};

const logOut = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  blackList.push(token);
  return res.json({ message: "User Logged Out Successfully!" });
};

module.exports = { register, login, logOut, blackList };
