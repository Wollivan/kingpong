const fs = require("fs");

// Functions to EDIT a single inventory item by id

function readData() {
  return JSON.parse(fs.readFileSync("./data/games.json"));
}

function editGame(req, res) {
  try {
    const gameToFind = req.params.gameId;
    const gameData = readData();

    const gameIndex = gameData.findIndex((game) => game.gameId === gameToFind);
    if (gameIndex === -1) {
      return res.status(404).json({ message: "Game not found" });
    }

    const {
      gameId,
      sport,
      playerOneID,
      playerTwoId,
      playerOneScore,
      playerTwoScore,
    } = req.body;

    // inventory item details
    if (warehouseID) {
      gameData[gameIndex].warehouseID = warehouseID;
    }
    if (warehouseName) {
      gameData[gameIndex].warehouseName = warehouseName;
    }
    if (itemName) {
      gameData[gameIndex].itemName = itemName;
    }
    if (description) {
      gameData[gameIndex].description = description;
    }
    if (category) {
      gameData[gameIndex].category = category;
    }
    if (status) {
      gameData[gameIndex].status = status;
    }
    if (quantity) {
      gameData[gameIndex].quantity = quantity;
    }

    // remove inventory item, and add in new inventory item
    gameData.splice(gameIndex, 1, gameData[gameIndex]);

    // write to file
    fs.writeFileSync("./data/games.json", JSON.stringify(gameData));
    return res.status(202).json(gameData[gameIndex]);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = editGame;
