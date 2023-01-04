const challengesRouter = require("express").Router();

const getChallengeList = require("../../controllers/challenges/GETChallengeList");
const addChallenge = require("../../controllers/challenges/POSTChallenge");

challengesRouter.route("/challenges").get(getChallengeList).post(addChallenge);

module.exports = challengesRouter;
