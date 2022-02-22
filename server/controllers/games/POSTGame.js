const fs = require("fs");
const uniqid = require("uniqid");

// Function to ADD an inventory item

function addGame(req, res) {
  try {
    const { sport, playerOneID, playerTwoId, playerOneScore, playerTwoScore } =
      req.body;
    const inventoryData = JSON.parse(fs.readFileSync("./data/games.json"));
    const newGame = {
      gameId: uniqid(),
      sport,
      playerOneID,
      playerTwoId,
      playerOneScore,
      playerTwoScore,
    };
    inventoryData.push(newGame);
    fs.writeFileSync("./data/games.json", JSON.stringify(inventoryData));

    // When adding a game update
    // TODO avg score
    // TODO avg op score
    // TODO perfect game count
    // TODO wins
    // TODO losses
    return res.status(201).json(newGame);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No game data found", error: err.message });
  }
}

module.exports = addGame;
