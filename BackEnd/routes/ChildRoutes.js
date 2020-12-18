const routes = require("express").Router();
const {
  getChildById,
  getChildlist,
  addChild,
} = require("../controllers/ChildController");

routes.get("/get-child-profile/:id", getChildById);
routes.get("/get-child-profile-list", getChildlist);
routes.post("/child-profile-create", addChild);

module.exports = routes;
