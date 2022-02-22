const fs = require("fs");

// Functions to EDIT a single inventory item by id

function readData() {
  return JSON.parse(fs.readFileSync("./data/players.json"));
}

function editPlayer(req, res) {
  try {
    const playerToFind = req.params.playerId;
    const playerData = readData();

    const playerIndex = playerData.findIndex(
      (player) => player.playerId === playerToFind
    );
    if (playerIndex === -1) {
      return res.status(404).json({ message: "player not found" });
    }

    const {
      playerId,
      sport,
      playerOneID,
      playerTwoId,
      playerOneScore,
      playerTwoScore,
    } = req.body;

    // inventory item details
    if (warehouseID) {
      playerData[playerIndex].warehouseID = warehouseID;
    }
    if (warehouseName) {
      playerData[playerIndex].warehouseName = warehouseName;
    }
    if (itemName) {
      playerData[playerIndex].itemName = itemName;
    }
    if (description) {
      playerData[playerIndex].description = description;
    }
    if (category) {
      playerData[playerIndex].category = category;
    }
    if (status) {
      playerData[playerIndex].status = status;
    }
    if (quantity) {
      playerData[playerIndex].quantity = quantity;
    }

    // remove inventory item, and add in new inventory item
    playerData.splice(playerIndex, 1, playerData[playerIndex]);

    // write to file
    fs.writeFileSync("./data/players.json", JSON.stringify(playerData));
    return res.status(202).json(playerData[playerIndex]);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = editPlayer;
