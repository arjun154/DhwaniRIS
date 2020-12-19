const routes = require("express").Router();
const {
  getChildById,
  getChildlist,
  addChild,
} = require("../controllers/ChildController");
const { authMiddleware } = require("../middleware/authMiddleware");

routes.get("/get-child-profile/:id", authMiddleware, getChildById);
routes.get("/get-child-profile-list", authMiddleware, getChildlist);
routes.post("/child-profile-create", authMiddleware, addChild);

module.exports = routes;
