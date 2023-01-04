const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const Tournament = require("../../models/tournament");

async function getTournament(req, res) {
  try {
    const tournament = await Tournament.find();
    return res.send(tournament);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getTournament;
