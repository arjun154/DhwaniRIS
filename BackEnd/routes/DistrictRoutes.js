const routes = require("express").Router();
const {
  getDistrictlist,
  addDistrict,
} = require("../controllers/DistrictController");
const { authMiddleware } = require("../middleware/authMiddleware");

routes.get("/get-district", authMiddleware, getDistrictlist);
routes.post("/create-district", authMiddleware, addDistrict);

module.exports = routes;
