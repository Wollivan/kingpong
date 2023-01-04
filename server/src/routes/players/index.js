const playersRouter = require("express").Router();

const getPlayerList = require("../../controllers/players/GETPlayerList");
const addPlayer = require("../../controllers/players/POSTPlayer");

playersRouter.route("/players").get(getPlayerList).post(addPlayer);

module.exports = playersRouter;
