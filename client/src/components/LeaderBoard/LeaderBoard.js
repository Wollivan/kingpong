import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LeaderBoard.scss";
import { PLAYERS_API, GAMES_API } from "../../utils/api";

export default function LeaderBoard() {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    getPlayersList();
    getGamesList();
    console.log("test");
  }, []);

  const getPlayersList = () => {
    axios
      .get(PLAYERS_API)
      .then((response) => {
        console.log(response);
        setPlayers(response.data);
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const getGamesList = () => {
    axios
      .get(GAMES_API)
      .then((response) => {
        console.log(response);
        setGames(response.data);
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const getLeaderBoard = () => {
    // return "test";
    // return games.filter((game) => game.playerOneId === 1);
    // console.log(players);
    const sortedPlayers = players.sort((a, b) => {
      return b.wins - a.wins;
    });
    let output = sortedPlayers.map((player) => {
      return (
        <div className="leaderboard__item" key={player.name}>
          <div className="leaderboard__item-value">{player.name}</div>
          <div className="leaderboard__item-value">{player.wins}</div>
          <div className="leaderboard__item-value">{player.losses}</div>
          <div className="leaderboard__item-value">{player.perfectGames}</div>
          <div className="leaderboard__item-value">{player.avgScore}</div>
          <div className="leaderboard__item-value">{player.avgOpScore}</div>
          <div className="leaderboard__item-value">
            {player.mostWinsAgainst}
          </div>
          <div className="leaderboard__item-value">
            {player.mostLossesAgainst}
          </div>
        </div>
      );
    });
    return output;
  };

  if (games && players) {
    return (
      <div className="leaderboard">
        <div className="leaderboard__item--header">
          <div className="leaderboard__item-value bold">Name</div>
          <div className="leaderboard__item-value">Wins</div>
          <div className="leaderboard__item-value">Losses</div>
          <div className="leaderboard__item-value">Perfect Games</div>
          <div className="leaderboard__item-value">Avg Score</div>
          <div className="leaderboard__item-value">Avg Op. Score</div>
          <div className="leaderboard__item-value">Most Wins Against</div>
          <div className="leaderboard__item-value">Most Losses Against</div>
        </div>
        {getLeaderBoard()}
      </div>
    );
  } else {
    return "loading";
  }
}
