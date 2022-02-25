const fs = require("fs");
const uniqid = require("uniqid");

// Function to ADD a player

function addPlayer(req, res) {
  try {
    const { playerName } = req.body;
    console.log(playerName);
    const playerData = JSON.parse(fs.readFileSync("./data/players.json"));
    const newPlayer = {
      id: uniqid(),
      name: playerName,
      wins: "-",
      losses: "-",
      perfectGames: "-",
      avgScore: 0,
      avgOpScore: 0,
      mostWinsAgainst: "-",
      mostLossesAgainst: "-",
    };
    playerData.push(newPlayer);
    fs.writeFileSync("./data/players.json", JSON.stringify(playerData));
    return res.status(201).json(newPlayer);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No player data found", error: err.message });
  }
}

module.exports = addPlayer;
