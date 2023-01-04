const tournamentsRouter = require("express").Router();

const getTournaments = require("../../controllers/tournaments/GETTournaments");

tournamentsRouter.route("/tournaments").get(getTournaments);

module.exports = tournamentsRouter;
