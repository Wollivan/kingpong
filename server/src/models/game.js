const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
  playerOneName: String,
  playerTwoName: String,
  playerOneScore: Number,
  playerTwoScore: Number,
  gameDate: String,
  tournamentCode: String,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
