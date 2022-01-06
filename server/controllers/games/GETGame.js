const fs = require("fs");

// Function to GET an inventory item by id

function getGame(req, res) {
  try {
    const gameToFind = req.params.gameId;

    const gameData = JSON.parse(fs.readFileSync("./data/games.json"));
    const game = gameData.find((game) => game.gameId === gameToFind);

    if (!game) {
      res.status(404).json({ message: "Game details not found" });
    }
    return res.status(200).json(game);
  } catch (err) {
    return res.status(500).json({
      message: "No data found",
      error: err.message,
    });
  }
}

module.exports = getGame;
