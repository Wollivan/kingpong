const fs = require("fs");

// Function to GET an inventory item by id

function getPlayer(req, res) {
  try {
    const playerToFind = req.params.playerId;

    const playerData = JSON.parse(fs.readFileSync("./data/players.json"));
    const player = playerData.find(
      (player) => player.playerId === playerToFind
    );

    if (!player) {
      res.status(404).json({ message: "player details not found" });
    }
    return res.status(200).json(player);
  } catch (err) {
    return res.status(500).json({
      message: "No data found",
      error: err.message,
    });
  }
}

module.exports = getPlayer;
