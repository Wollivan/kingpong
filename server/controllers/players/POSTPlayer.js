const fs = require("fs");
const uniqid = require("uniqid");

// Function to ADD an inventory item

function addPlayer(req, res) {
  try {
    const { sport, playerOneID, playerTwoId, playerOneScore, playerTwoScore } =
      req.body;
    const inventoryData = JSON.parse(fs.readFileSync("./data/players.json"));
    const newPlayer = {
      playerId: uniqid(),
      sport,
      playerOneID,
      playerTwoId,
      playerOneScore,
      playerTwoScore,
    };
    inventoryData.push(newPlayer);
    fs.writeFileSync("./data/players.json", JSON.stringify(inventoryData));
    return res.status(201).json(newPlayer);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No player data found", error: err.message });
  }
}

module.exports = addPlayer;
