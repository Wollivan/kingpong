const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const Challenge = require("../../models/challenge");
// Function to GET inventory list

async function getChallengeList(req, res) {
  try {
    const { tournamentCode } = req.query;
    const challenges = await Challenge.find({ tournamentCode: tournamentCode });
    return res.send(challenges);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getChallengeList;
