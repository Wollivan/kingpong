import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GameList.scss";
import { GAMES_API } from "../../utils/api";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGamesList();
  }, []);

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

  const getOutput = () => {
    let output = games.map((game) => {
      return (
        <div className="game-list__item" key={game.gameId}>
          <div className="game-list__item-player-one">{game.playerOneName}</div>
          <div className="game-list__item-player-one-score">
            {game.playerOneScore}
          </div>
          <div className="game-list__item-v">v</div>
          <div className="game-list__item-player-two-score">
            {game.playerTwoScore}
          </div>
          <div className="game-list__item-player-two">{game.playerTwoName}</div>
        </div>
      );
    });
    return output;
  };

  if (games) {
    return (
      <div className="game-list">
        <h2>Games</h2>
        {getOutput()}
      </div>
    );
  } else {
    return "loading";
  }
}
