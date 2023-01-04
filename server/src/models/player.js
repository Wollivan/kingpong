const mongoose = require("mongoose");

const { Schema } = mongoose;

const playerSchema = new Schema({
  name: String,
  tiMetric: Number,
  wins: String,
  losses: String,
  perfectGames: String,
  avgScore: Number,
  avgOpScore: Number,
  mostWinsAgainst: String,
  mostLossesAgainst: String,
  tournamentCode: String,
  hasGoldenMonkey: Number,
  kingpongCount: Number,
  currentStreak: Number,
  highestStreak: Number,
  highestTIM: Number,
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
