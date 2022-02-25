import React, { useEffect, useState } from "react";
import "./LeaderBoard.scss";
import AddGameForm from "../AddGameForm/AddGameForm";

export default function LeaderBoard({ players }) {
  const getLeaderBoard = () => {
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
          <div className="leaderboard__item-value">
            {player.avgScore ? parseFloat(player.avgScore).toFixed(2) : "-"}
          </div>
          <div className="leaderboard__item-value">
            {player.avgOpScore ? parseFloat(player.avgOpScore).toFixed(2) : "-"}
          </div>
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

  if (players) {
    return (
      <>
        {" "}
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
      </>
    );
  } else {
    return "loading";
  }
}
