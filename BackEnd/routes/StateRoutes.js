const routes = require("express").Router();
const { getState, addState } = require("../controllers/StateController");

routes.post("/create-state", addState);
routes.get("/get-state", getState);

module.exports = routes;
