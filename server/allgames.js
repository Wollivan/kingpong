const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

//import our game data model
const Game = require("./models/game");
const Player = require("./models/player");

async function seed() {
  let today = new Date();
  // const dd = String(today.getDate()).padStart(2, "0");
  // const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // const yyyy = today.getFullYear();

  // today = mm + "/" + dd + "/" + yyyy;

  const gamesArr = [

    {
      playerOneName: "Tim Smith",
      playerTwoName: "Matt Hood",
      playerOneScore: 9,
      playerTwoScore: 11,
    },

    {
      playerOneName: "Tim Smith",
      playerTwoName: "Matt Hood",
      playerOneScore: 11,
      playerTwoScore: 6,
    },


    {
      playerOneName: "Tim Smith",
      playerTwoName: "Matt Hood",
      playerOneScore: 9,
      playerTwoScore: 11,
    },


    {
      playerOneName: "Tim Smith",
      playerTwoName: "Matt Hood",
      playerOneScore: 7,
      playerTwoScore:1,
    },

    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 12,
      playerTwoScore: 10,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 10,
      playerTwoScore: 12,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 9,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 8,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "V",
      playerOneScore: 6,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "V",
      playerOneScore: 7,
      playerTwoScore: 11,
    },




    {
      playerOneName: "James Adams",
      playerTwoName: "Matt Hood",
      playerOneScore: 12,
      playerTwoScore: 10,
    },
    {
      playerOneName: "James Adams",
      playerTwoName: "Matt Hood",
      playerOneScore: 7,
      playerTwoScore: 11,
    },
    {
      playerOneName: "James Adams",
      playerTwoName: "Matt Hood",
      playerOneScore: 11,
      playerTwoScore: 7,
    },

    {
      playerOneName: "Matt Hood",
      playerTwoName: "Fred Hoffman",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Fred Hoffman",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Fred Hoffman",
      playerOneScore: 10,
      playerTwoScore: 12,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "Tim Smith",
      playerOneScore: 8,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Tim Smith",
      playerOneScore: 11,
      playerTwoScore: 6,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Tim Smith",
      playerOneScore: 10,
      playerTwoScore: 12,
    },

    {
      playerOneName: "Matt Hood",
      playerTwoName: "Fred Hoffman",
      playerOneScore: 8,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Fred Hoffman",
      playerOneScore: 10,
      playerTwoScore: 12,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 9,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 8,
    },

    {
      playerOneName: "Tim Smith",
      playerTwoName: "Kane St Quintin",
      playerOneScore: 8,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Tim Smith",
      playerTwoName: "Kane St Quintin",
      playerOneScore: 11,
      playerTwoScore: 8,
    },
    {
      playerOneName: "Tim Smith",
      playerTwoName: "Kane St Quintin",
      playerOneScore: 7,
      playerTwoScore: 11,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "Mehdi Khiabani",
      playerOneScore: 3,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Mehdi Khiabani",
      playerOneScore: 8,
      playerTwoScore: 11,
    },


    {
      playerOneName: "Mehdi Khiabani",
      playerTwoName: "Tim Smith",
      playerOneScore: 7,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Mehdi Khiabani",
      playerTwoName: "Tim Smith",
      playerOneScore: 3,
      playerTwoScore: 11,
    },

    {
      playerOneName: "Fred Hoffman",
      playerTwoName: "Luca Feser",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
    {
      playerOneName: "Fred Hoffman",
      playerTwoName: "Luca Feser",
      playerOneScore: 11,
      playerTwoScore: 7,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "JJ Waters",
      playerOneScore: 3,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "JJ Waters",
      playerOneScore: 3,
      playerTwoScore: 11,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "Luca Feser",
      playerOneScore: 10,
      playerTwoScore: 12,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Luca Feser",
      playerOneScore: 7,
      playerTwoScore: 11,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 5,
    },

    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 7,
    },



    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 12,
      playerTwoScore: 10,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 7,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 10,
      playerTwoScore: 12,
    },


    {
      playerOneName: "JJ Waters",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 8,
    },
    {
      playerOneName: "JJ Waters",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 6,
    },


    {
      playerOneName: "Fred Hoffman",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
    {
      playerOneName: "Fred Hoffman",
      playerTwoName: "James Adams",
      playerOneScore: 7,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Fred Hoffman",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 7,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Ford",
      playerOneScore: 10,
      playerTwoScore: 12,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Ford",
      playerOneScore: 9,
      playerTwoScore: 11,
    },


     {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 12,
      playerTwoScore: 10,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Adams",
      playerOneScore: 11,
      playerTwoScore: 7,
    },



    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Ford",
      playerOneScore: 6,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "James Ford",
      playerOneScore: 4,
      playerTwoScore: 11,
    },


    {
      playerOneName: "Matt Hood",
      playerTwoName: "Tim Smith",
      playerOneScore: 8,
      playerTwoScore: 11,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Tim Smith",
      playerOneScore: 11,
      playerTwoScore: 9,
    },
    {
      playerOneName: "Matt Hood",
      playerTwoName: "Tim Smith",
      playerOneScore: 11,
      playerTwoScore: 3,
    },


    {
      playerOneName: "Kane St Quintin",
      playerTwoName: "Luca Feser",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
    {
      playerOneName: "Kane St Quintin",
      playerTwoName: "Luca Feser",
      playerOneScore: 11,
      playerTwoScore: 7,
    },

    {
      playerOneName: "JJ Waters",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 8,
    },
    {
      playerOneName: "JJ Waters",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 9,
    },

      {
      playerOneName: "Luca Feser",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
      {
      playerOneName: "Luca Feser",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
      {
      playerOneName: "Luca Feser",
      playerTwoName: "V",
      playerOneScore: 11,
      playerTwoScore: 7,
    },
  ];
  gamesArr.forEach((game) => {
  await Game.create({
    playerOneName: game.playerOneName,
    playerTwoName: game.playerTwoName,
    playerOneScore: game.playerOneScore,
    playerTwoScore: game.playerTwoScore,
    gameDate: today,
  });
  })




  console.log("first game created");

  //   await Player.create({
  //     name: "Bob",
  //     wins: "-",
  //     losses: "-",
  //     perfectGames: "-",
  //     avgScore: 0,
  //     avgOpScore: 0,
  //     mostWinsAgainst: "-",
  //     mostLossesAgainst: "-",
  //   });
  console.log("first player created");

  const filter = { name: "Tim" };
  const update = { wins: 2 };

  // `doc` is the document _after_ `update` was applied because of
  // `new: true`
  await Player.findOneAndUpdate(filter, update);
}

seed();
