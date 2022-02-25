const fs = require("fs");
const uniqid = require("uniqid");

// Function to ADD an inventory item

function mostAgainst(gamesArray, player) {
  let counts = {};
  let compare = 0;
  let mostFrequent = "no wins";

  for (let i = 0; i < gamesArray.length; i++) {
    let opponent;
    if (player == 1) {
      opponent = gamesArray[i].playerTwoName;
    } else {
      opponent = gamesArray[i].playerOneName;
    }
    console.log(opponent, player);
    // console.log(opponent);
    if (!counts[opponent]) {
      counts[opponent] = 1;
    } else {
      counts[opponent] = counts[opponent] + 1;
    }
    // console.log(counts);
    if (counts[opponent] > compare) {
      compare = counts[opponent];
      mostFrequent = opponent;
    }
  }
  return mostFrequent;
}

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
    const gamesFiltered = gameData.filter((game) => {
      return (
        game.playerOneName === playerOneName ||
        game.playerTwoName === playerOneName ||
        game.playerOneName === playerTwoName ||
        game.playerTwoName === playerTwoName
      );
    });
    // console.log(gamesFiltered);
    const allGamesMapped = gamesFiltered.map((game) => {
      // console.log(game);
      if (game.playerOneName == playerOneName) {
        return {
          playerOneName: game.playerOneName,
          playerTwoName: game.playerTwoName,
          playerOneScore: game.playerOneScore,
          playerTwoScore: game.playerTwoScore,
        };
      } else if (game.playerTwoName == playerTwoName) {
        return {
          playerOneName: game.playerOneName,
          playerTwoName: game.playerTwoName,
          playerOneScore: game.playerOneScore,
          playerTwoScore: game.playerTwoScore,
        };
      } else if (game.playerOneName == playerTwoName) {
        return {
          playerOneName: game.playerTwoName,
          playerTwoName: game.playerOneName,
          playerOneScore: game.playerTwoScore,
          playerTwoScore: game.playerOneScore,
        };
      } else if (game.playerTwoName == playerOneName) {
        return {
          playerOneName: game.playerTwoName,
          playerTwoName: game.playerOneName,
          playerOneScore: game.playerTwoScore,
          playerTwoScore: game.playerOneScore,
        };
      }
    });
    // console.log(allGamesMapped);

    // total games
    const playerOneGameCount = allGamesMapped.filter((game) => {
      return game.playerOneName === playerOneName;
    }).length;

    const playerTwoGameCount = allGamesMapped.filter((game) => {
      return game.playerTwoName === playerTwoName;
    }).length;

    // console.log(playerOneGameCount, playerOneName);
    // console.log(playerTwoGameCount, playerTwoName);
    // console.log("player total games");

    // avg score
    const playerOneAvgScore =
      allGamesMapped
        .filter((game) => {
          return game.playerOneName == playerOneName;
        })
        .reduce((total, next) => {
          return total + parseInt(next.playerOneScore);
        }, 0) / playerOneGameCount;

    const playerTwoAvgScore =
      allGamesMapped
        .filter((game) => {
          return game.playerTwoName == playerTwoName;
        })
        .reduce((total, next) => {
          return total + parseInt(next.playerTwoScore);
        }, 0) / playerTwoGameCount;

    // console.log(playerOneAvgScore, playerOneName);
    // console.log(playerTwoAvgScore, playerTwoName);
    // console.log("player av score");

    // avg op score
    const playerOneAvgOpScore =
      allGamesMapped
        .filter((game) => {
          return game.playerOneName == playerOneName;
        })
        .reduce((total, next) => {
          return total + parseInt(next.playerTwoScore);
        }, 0) / playerOneGameCount;

    const playerTwoAvgOpScore =
      allGamesMapped
        .filter((game) => {
          return game.playerTwoName == playerTwoName;
        })
        .reduce((total, next) => {
          return total + parseInt(next.playerOneScore);
        }, 0) / playerTwoGameCount;

    // console.log(playerOneAvgOpScore, playerOneName);
    // console.log(playerTwoAvgOpScore, playerTwoName);
    // console.log("player av score");

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

    // console.log(playerOnePerfectGames, playerOneName);
    // console.log(playerTwoPerfectGames, playerTwoName);
    // console.log("player perfect games");

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

    // console.log(playerOneWins, playerOneName);
    // console.log(playerTwoWins, playerTwoName);
    // console.log("player wins");

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

    // console.log(playerOneLosses, playerOneName);
    // console.log(playerTwoLosses, playerTwoName);
    // console.log("player losses");

    // most wins and losses against
    const playerOneGamesW = allGamesMapped.filter((game) => {
      return (
        game.playerOneName == playerOneName &&
        game.playerOneScore > game.playerTwoScore
      );
    });

    const playerOneGamesL = allGamesMapped.filter((game) => {
      return (
        game.playerOneName == playerOneName &&
        game.playerOneScore < game.playerTwoScore
      );
    });

    const playerTwoGamesW = allGamesMapped.filter((game) => {
      return (
        game.playerTwoName == playerTwoName &&
        game.playerTwoScore > game.playerOneScore
      );
    });

    const playerTwoGamesL = allGamesMapped.filter((game) => {
      return (
        game.playerTwoName == playerTwoName &&
        game.playerTwoScore < game.playerOneScore
      );
    });

    const playerOneMostWinsAgainst = mostAgainst(playerOneGamesW, 1);
    const playerTwoMostWinsAgainst = mostAgainst(playerTwoGamesW, 2);
    const playerOneMostLossesAgainst = mostAgainst(playerOneGamesL, 1);
    const playerTwoMostLossesAgainst = mostAgainst(playerTwoGamesL, 1);

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
