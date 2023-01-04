const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

//import our game data model
const Challenge = require("./src/models/challenge");
const Tournament = require("./src/models/tournament");

async function seed() {
  await Tournament.create({
    tournamentCode: "fuel",
    tournamentName: "Fuel Studios",
  });
  console.log("tourney created");
}

seed();
