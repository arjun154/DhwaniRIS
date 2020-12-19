const routes = require("express").Router();
const { getState, addState } = require("../controllers/StateController");
const { authMiddleware } = require("../middleware/authMiddleware");

routes.post("/create-state", authMiddleware, addState);
routes.get("/get-state", authMiddleware, getState);

module.exports = routes;
