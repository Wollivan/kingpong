const fs = require("fs");
const uniqid = require("uniqid");

// Function to ADD an inventory item

function addGame(req, res) {
  try {
    const { playerOneName, playerTwoName, playerOneScore, playerTwoScore } =
      req.body;
    const gameData = JSON.parse(fs.readFileSync("./data/games.json"));
    const newGame = {
      gameId: uniqid(),
      playerOneName,
      playerTwoName,
      playerOneScore,
      playerTwoScore,
    };

    gameData.push(newGame);
    fs.writeFileSync("./data/games.json", JSON.stringify(gameData));

    // When adding a game update both player

    const allGamesMapped = gameData.map((player) => {
      if (player.playerOneName === playerOneName) {
        return {
          playerOneName: player.playerOneName,
          playerTwoName: player.playerTwoName,
          playerOneScore: player.playerOneScore,
          playerTwoScore: player.playerTwoScore,
        };
      } else if (player.playerTwoName === playerOneName) {
        return {
          playerOneName: player.playerTwoName,
          playerTwoName: player.playerOneName,
          playerOneScore: player.playerTwoScore,
          playerTwoScore: player.playerOneScore,
        };
      }
    });
    console.log(allGamesMapped);

    // total games
    const playerOneGameCount = allGamesMapped.filter((game) => {
      return game.playerOneName === playerOneName;
    }).length;

    const playerTwoGameCount = allGamesMapped.filter((game) => {
      return game.playerTwoName === playerTwoName;
    }).length;

    // avg score
    const playerOneAvgScore =
      allGamesMapped.reduce((total, next) => {
        return (
          total + parseInt(next.playerOneScore) &&
          game.playerOneName === playerOneName
        );
      }, 0) / playerOneGameCount;

    const playerTwoAvgScore =
      allGamesMapped.reduce((total, next) => {
        return (
          total + parseInt(next.playerTwoScore) &&
          game.playerTwoName === playerTwoName
        );
      }, 0) / playerTwoGameCount;

    // avg op score
    const playerOneAvgOpScore =
      allGamesMapped.reduce((total, next) => {
        return (
          total + parseInt(next.playerTwoScore) &&
          game.playerOneName === playerOneName
        );
      }, 0) / playerOneGameCount;

    const playerTwoAvgOpScore =
      allGamesMapped.reduce((total, next) => {
        return (
          total + parseInt(next.playerOneScore) &&
          game.playerTwoName === playerTwoName
        );
      }, 0) / playerTwoGameCount;
    // console.log(playerTwoAvgOpScore, playerTwoGameCount);
    // perfect game count
    const playerOnePerfectGames = allGamesMapped.filter((game) => {
      return (
        parseInt(game.playerTwoScore) === 0 &&
        game.playerOneName === playerOneName
      );
    }).length;
    const playerTwoPerfectGames = allGamesMapped.filter((game) => {
      return (
        parseInt(game.playerOneScore) === 0 &&
        game.playerTwoName === playerTwoName
      );
    }).length;

    // wins
    const playerOneWins = allGamesMapped.filter((game) => {
      return (
        parseInt(game.playerOneScore) > parseInt(game.playerTwoScore) &&
        game.playerOneName === playerOneName
      );
    }).length;

    const playerTwoWins = allGamesMapped.filter((game) => {
      return (
        parseInt(game.playerOneScore) < parseInt(game.playerTwoScore) &&
        game.playerTwoName === playerTwoName
      );
    }).length;

    // losses
    const playerOneLosses = allGamesMapped.filter((game) => {
      return (
        parseInt(game.playerOneScore) < parseInt(game.playerTwoScore) &&
        game.playerOneName === playerOneName
      );
    }).length;

    const playerTwoLosses = allGamesMapped.filter((game) => {
      return (
        parseInt(game.playerOneScore) > parseInt(game.playerTwoScore) &&
        game.playerTwoName === playerTwoName
      );
    }).length;

    // TODO most wins against
    // TODO most losses against

    const playerOneMostWinsAgainst = "TBC";
    const playerOneMostLossesAgainst = "TBC";
    const playerTwoMostWinsAgainst = "TBC";
    const playerTwoMostLossesAgainst = "TBC";

    const playerOneNew = {
      name: playerOneName,
      wins: playerOneWins,
      losses: playerOneLosses,
      perfectGames: playerOnePerfectGames,
      avgScore: playerOneAvgScore,
      avgOpScore: playerOneAvgOpScore,
      mostWinsAgainst: playerOneMostWinsAgainst,
      mostLossesAgainst: playerOneMostLossesAgainst,
    };

    const playerTwoNew = {
      name: playerTwoName,
      wins: playerTwoWins,
      losses: playerTwoLosses,
      perfectGames: playerTwoPerfectGames,
      avgScore: playerTwoAvgScore,
      avgOpScore: playerTwoAvgOpScore,
      mostWinsAgainst: playerTwoMostWinsAgainst,
      mostLossesAgainst: playerTwoMostLossesAgainst,
    };

    // this is where we change the players
    //player One
    const playerData = JSON.parse(fs.readFileSync("./data/players.json"));
    const playerOneIndex = playerData.findIndex(
      (player) => player.name === playerOneName
    );

    if (playerOneIndex === -1) {
      return res.status(404).json({ message: "Player not found" });
    }
    playerData.splice(playerOneIndex, 1, playerOneNew);

    //player Two
    const playerTwoIndex = playerData.findIndex(
      (player) => player.name === playerTwoName
    );
    if (playerTwoIndex === -1) {
      return res.status(404).json({ message: "Player not found" });
    }
    playerData.splice(playerTwoIndex, 1, playerTwoNew);
    // write to file
    fs.writeFileSync("./data/players.json", JSON.stringify(playerData));

    //return the two players, for the call to then run 2 more axios calls to update them
    return res.status(201).json(gameData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No game data found", error: err.message });
  }
}

module.exports = addGame;
