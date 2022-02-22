const gamesRouter = require("express").Router();

const getGameList = require("../../controllers/games/GETGameList");
const addGame = require("../../controllers/games/POSTGame");

gamesRouter.route("/games").get(getGameList).post(addGame);

module.exports = gamesRouter;
