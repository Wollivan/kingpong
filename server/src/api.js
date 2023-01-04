const express = require("express");
const serverless = require("serverless-http");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();
const gamesRouter = require("./routes/games/index");
const playersRouter = require("./routes/players/index");
const challengesRouter = require("./routes/challenges/index");
const tournamentsRouter = require("./routes/tournaments/index");

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const Game = require("./models/game");

app.get("/", async (request, response) => {
  console.log("hey");
  response.send({ hello: "world" });
});

app.use("/.netlify/functions/api", gamesRouter);
app.use("/.netlify/functions/api", playersRouter);
app.use("/.netlify/functions/api", challengesRouter);
app.use("/.netlify/functions/api", tournamentsRouter);

// module.exports.handler = serverless(app);

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  // mongoose.connect(process.env.DATABASE_URL);
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
};
