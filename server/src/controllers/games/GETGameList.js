const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const Game = require("../../models/game");
// Function to GET inventory list

async function getGameList(req, res) {
  try {
    const { tournamentCode } = req.query;
    const games = await Game.find({ tournamentCode: tournamentCode });
    return res.send(games);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getGameList;
