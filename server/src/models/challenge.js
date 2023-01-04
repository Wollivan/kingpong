const mongoose = require("mongoose");

const { Schema } = mongoose;

const challengeSchema = new Schema({
  playerOneName: String,
  playerTwoName: String,
  tournamentCode: String,
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
