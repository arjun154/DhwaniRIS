const routes = require("express").Router();
const {
  getDistrictlist,
  addDistrict,
} = require("../controllers/DistrictController");

routes.get("/get-district", getDistrictlist);
routes.post("/create-district", addDistrict);

module.exports = routes;
