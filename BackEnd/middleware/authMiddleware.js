const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
const { blackList } = require("../controllers/UserController");

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(403);
  }

  console.log(blackList);
  if (blackList.indexOf(token) !== -1) {
    return res.sendStatus(403);
  }

  try {
    JWT.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json(err.message);
      }
      req.user = user;
      next();
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = { authMiddleware };
