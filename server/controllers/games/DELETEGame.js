const fs = require("fs");

// Function to DELETE an inventory item by id

function deleteGame(req, res) {
  try {
    const gameToFind = req.params.id;

    const gameData = JSON.parse(fs.readFileSync("./data/games.json"));

    const gameIndex = gameData.findIndex((game) => game.gameId === gameToFind);
    if (gameIndex === -1) {
      return res.status(404).json({ message: "game item not found" });
    }
    gameData.splice(gameIndex, 1);
    fs.writeFileSync("./data/games.json", JSON.stringify(gameData));
    return res.status(204).json({ message: "Item deleted" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = deleteGame;
