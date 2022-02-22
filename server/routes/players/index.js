const playersRouter = require("express").Router();

const getPlayerList = require("../../controllers/players/GETPlayerList");
const editPlayer = require("../../controllers/players/PUTPlayer");

playersRouter.route("/players").get(getPlayerList);

playersRouter.route("/players/:name").put(editPlayer);

module.exports = playersRouter;
