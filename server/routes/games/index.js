const gamesRouter = require("express").Router();

const deleteGame = require("../../controllers/games/DELETEGame");
const getGame = require("../../controllers/games/GETGame");
const getGameList = require("../../controllers/games/GETGameList");
const addGame = require("../../controllers/games/POSTGame");
const editGame = require("../../controllers/games/PUTGame");

gamesRouter.route("/games").get(getGameList).post(addGame);

gamesRouter
  .route("/games/:gameId")
  .delete(deleteGame)
  .get(getGame)
  .put(editGame);

module.exports = gamesRouter;
