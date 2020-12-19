const routes = require("express").Router();

const { register, login, logOut } = require("../controllers/UserController");

routes.post("/register", register);
routes.post("/login", login);
routes.get("/logout", logOut);

module.exports = routes;
