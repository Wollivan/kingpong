const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

//import our game data model
const Game = require("./src/models/game");
const Player = require("./src/models/player");

async function seed() {
  let today = new Date();
  // const dd = String(today.getDate()).padStart(2, "0");
  // const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // const yyyy = today.getFullYear();

  // today = mm + "/" + dd + "/" + yyyy;

  // await Game.create({
  //   playerOneName: "Tim",
  //   playerTwoName: "James",
  //   playerOneScore: 11,
  //   playerTwoScore: 4,
  //   gameDate: today,
  // });

  // await Game.create({
  //   playerOneName: "James",
  //   playerTwoName: "Tim",
  //   playerOneScore: 11,
  //   playerTwoScore: 2,
  //   gameDate: today,
  // });

  // await Game.create({
  //   playerOneName: "Tim",
  //   playerTwoName: "James",
  //   playerOneScore: 11,
  //   playerTwoScore: 5,
  //   gameDate: today,
  // });
  // console.log("first game created");

  await Player.create({
    name: "James Ford",
    tiMetric: 1000,
    wins: "-",
    losses: "-",
    perfectGames: "-",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
  });

  await Player.create({
    name: "Tim Smith",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Jack Doy",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Kane StQ",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Luca",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "-",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "DB",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "-",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "JJ Waters",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Henry Hoffman",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Chris Seaman",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Matt Hood",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Fred Hoffman",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 1,
    kingpongCount: 0,
  });

  await Player.create({
    name: "James Adams",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Patrick Grant",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "V Vatsavaye",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Rich Saunders",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "James Rix",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  await Player.create({
    name: "Kal",
    tiMetric: 1500,
    wins: "0",
    losses: "0",
    perfectGames: "0",
    avgScore: 0,
    avgOpScore: 0,
    mostWinsAgainst: "-",
    mostLossesAgainst: "-",
    tournamentCode: "fuel",
    hasGoldenMonkey: 0,
    kingpongCount: 0,
  });

  console.log("players created");

  // const filter = { name: "Tim" };
  // const update = { wins: 2 };

  // // `doc` is the document _after_ `update` was applied because of
  // // `new: true`
  // await Player.findOneAndUpdate(filter, update);
}

seed();
