const fs = require("fs");

// Function to GET inventory list

function getPlayerList(req, res) {
  try {
    const playerData = JSON.parse(fs.readFileSync("./data/players.json"));

    if (!playerData) {
      res.status(404).json({ message: "player list not found" });
    }
    return res.status(200).json(playerData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getPlayerList;
