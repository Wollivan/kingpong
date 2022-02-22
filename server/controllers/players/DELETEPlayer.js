const fs = require("fs");

// Function to DELETE a player by id

function deletePlayer(req, res) {
  try {
    const playerToFind = req.params.id;

    const playerData = JSON.parse(fs.readFileSync("./data/players.json"));

    const playerIndex = playerData.findIndex(
      (player) => player.playerId === playerToFind
    );
    if (playerIndex === -1) {
      return res.status(404).json({ message: "player item not found" });
    }
    playerData.splice(playerIndex, 1);
    fs.writeFileSync("./data/players.json", JSON.stringify(playerData));
    return res.status(204).json({ message: "Item deleted" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = deletePlayer;
