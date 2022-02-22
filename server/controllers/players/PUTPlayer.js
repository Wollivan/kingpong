const fs = require("fs");

// Functions to EDIT a single inventory item by id

function readData() {
  return JSON.parse(fs.readFileSync("./data/playerData.json"));
}

function editPlayer(req, res) {
  try {
    const playerToFind = req.params.playerName;
    const playerData = readData();

    const playerIndex = playerData.findIndex(
      (player) => player.playerName === playerToFind
    );
    if (playerIndex === -1) {
      return res.status(404).json({ message: "Player not found" });
    }

    const {
      wins,
      losses,
      perfectGames,
      avgScore,
      avgOpScore,
      mostWinsAgainst,
      mostLossesAgainst,
    } = req.body;

    // inventory item details
    if (wins) {
      playerData[playerIndex].wins = wins;
    }
    if (losses) {
      playerData[playerIndex].losses = losses;
    }
    if (perfectGames) {
      playerData[playerIndex].perfectGames = perfectGames;
    }
    if (avgScore) {
      playerData[playerIndex].avgScore = avgScore;
    }
    if (avgOpScore) {
      playerData[playerIndex].avgOpScore = avgOpScore;
    }
    if (mostWinsAgainst) {
      playerData[playerIndex].mostWinsAgainst = mostWinsAgainst;
    }
    if (mostLossesAgainst) {
      playerData[playerIndex].mostLossesAgainst = mostLossesAgainst;
    }

    // remove player, and add in new player
    playerData.splice(playerIndex, 1, playerData[playerIndex]);

    // write to file
    fs.writeFileSync("./data/players.json", JSON.stringify(playerData));
    return res.status(202).json(playerData[playerIndex]);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = editPlayer;
