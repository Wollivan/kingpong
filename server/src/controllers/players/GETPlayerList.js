const fs = require("fs");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const Player = require("../../models/player");

// Function to GET inventory list

async function getPlayerList(req, res) {
  try {
    const { tournamentCode } = req.query;
    const players = await Player.find({ tournamentCode: tournamentCode });
    return res.send(players);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getPlayerList;
