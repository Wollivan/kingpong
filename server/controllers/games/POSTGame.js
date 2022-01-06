const fs = require("fs");
const uniqid = require("uniqid");

// Function to ADD an inventory item

function addInventoryItem(req, res) {
  try {
    const { sport, playerOneID, playerTwoId, playerOneScore, playerTwoScore } =
      req.body;
    const inventoryData = JSON.parse(fs.readFileSync("./data/games.json"));
    const newGame = {
      gameId: uniqid(),
      gameId,
      sport,
      playerOneID,
      playerTwoId,
      playerOneScore,
      playerTwoScore,
    };
    inventoryData.push(newGame);
    fs.writeFileSync("./data/games.json", JSON.stringify(inventoryData));
    return res.status(201).json(newGame);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No game data found", error: err.message });
  }
}

module.exports = addInventoryItem;
