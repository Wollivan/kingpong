const fs = require("fs");
const uniqid = require("uniqid");
const Player = require("../../models/player");

// Function to ADD a player

async function addPlayer(req, res) {
  try {
    const { playerName, tournamentCode } = req.body;
    console.log(req.body);
    console.log(playerName);

    const newPlayer = {
      // id: uniqid(),
      name: playerName,
      tiMetric: 100,
      wins: "-",
      losses: "-",
      perfectGames: "-",
      avgScore: 0,
      avgOpScore: 0,
      mostWinsAgainst: "-",
      mostLossesAgainst: "-",
      tournamentCode: tournamentCode,
      hasGoldenMonkey: false,
      kingpongCount: 0,
      currentStreak: 0,
      highestStreak: 0,
      highestTIM: 100,
    };

    await Player.create(newPlayer);

    // playerData.push(newPlayer);
    // fs.writeFileSync("./data/players.json", JSON.stringify(playerData));
    return res.status(201).json(newPlayer);
  } catch (err) {
    return res.status(500).json({ message: "No player data found", error: err.message });
  }
}

module.exports = addPlayer;
