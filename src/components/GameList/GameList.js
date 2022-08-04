import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GameList.scss";
import { GAMES_API } from "../../utils/api";

export default function GameList({ games }) {
  const getOutput = () => {
    let output = games.map((game, i) => {
      return (
        <div className="games__game-list-item" key={i}>
          <div className="games__game-list-item-date">
            {game.gameDate.substr(0, game.gameDate.indexOf("T"))}
          </div>
          <div className="games__game-list-item-details">
            <div className="games__game-list-item-details-player-one">
              {game.playerOneName}
            </div>
            <div className="games__game-list-item-details-player-one-score">
              {game.playerOneScore}
            </div>
            <div className="games__game-list-item-details-v">v</div>
            <div className="games__game-list-item-details-player-two-score">
              {game.playerTwoScore}
            </div>
            <div className="games__game-list-item-details-player-two">
              {game.playerTwoName}
            </div>
          </div>
        </div>
      );
    });
    return output;
  };

  if (games) {
    return (
      <div className="games">
        <h2 className="center">Games</h2>
        <div className="games__game-list">{getOutput()}</div>
      </div>
    );
  } else {
    return "loading";
  }
}
