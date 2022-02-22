const fs = require("fs");

// Function to GET inventory list

function getGameList(req, res) {
  try {
    const gameData = JSON.parse(fs.readFileSync("./data/games.json"));

    if (!gameData) {
      res.status(404).json({ message: "Game list not found" });
    }
    return res.status(200).json(gameData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getGameList;
