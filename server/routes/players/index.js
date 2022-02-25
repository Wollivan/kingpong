const playersRouter = require("express").Router();

const getPlayerList = require("../../controllers/players/GETPlayerList");
// const editPlayer = require("../../controllers/players/PUTPlayer");
const addPlayer = require("../../controllers/players/POSTPlayer");

playersRouter.route("/players").get(getPlayerList).post(addPlayer);

// playersRouter.route("/players/:name").put(editPlayer);

module.exports = playersRouter;
