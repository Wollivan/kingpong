const playersRouter = require("express").Router();

const deletePlayer = require("../../controllers/players/DELETEPlayer");
const getPlayer = require("../../controllers/players/GETPlayer");
const getPlayerList = require("../../controllers/players/GETPlayerList");
const addPlayer = require("../../controllers/players/POSTPlayer");
const editPlayer = require("../../controllers/players/PUTPlayer");

playersRouter.route("/players").get(getPlayerList).post(addPlayer);

playersRouter
  .route("/players/:PlayerId")
  .delete(deletePlayer)
  .get(getPlayer)
  .put(editPlayer);

module.exports = playersRouter;
