const { response } = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const Challenge = require("../../models/challenge");

async function addChallenge(req, res) {
  try {
    const { playerOneName, playerTwoName, tournamentCode } = req.body;

    // add new entry for the game
    const newChallenge = {
      // gameId: uniqid(),
      playerOneName,
      playerTwoName,
      tournamentCode,
    };
    console.log(newChallenge);
    // add the game to the database
    await Challenge.create(newChallenge);

    //return the two players, for the call to then run 2 more axios calls to update them
    return res.status(201).json({ success: true });
  } catch (err) {
    console.log("BROKEN");
    return res
      .status(500)
      .json({ message: "No game data found", error: err.message });
  }
}

module.exports = addChallenge;
