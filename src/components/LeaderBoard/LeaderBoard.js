import React, { useEffect, useState } from "react";
import "./LeaderBoard.scss";
import AddGameForm from "../AddGameForm/AddGameForm";

export default function LeaderBoard({ players }) {
  const getLeaderBoard = () => {
    const sortedPlayers = players.sort((a, b) => {
      return b.wins - a.wins;
    });

    // is this magic?!
    function ordinal_suffix_of(i) {
      let j = i % 10;
      let k = i % 100;
      if (j == 1 && k != 11) {
        return i + "st";
      }
      if (j == 2 && k != 12) {
        return i + "nd";
      }
      if (j == 3 && k != 13) {
        return i + "rd";
      }
      return i + "th";
    }
    let output = sortedPlayers.map((player, index) => {
      return (
        <div className="leaderboard__item" key={ordinal_suffix_of(index + 1)}>
          <div className="leaderboard__item-value--pos bold">
            <span className="leaderboard__item-value-mobile-label">
              Position{" "}
            </span>
            {ordinal_suffix_of(index + 1)}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">Name </span>
            {player.name} {index == 0 ? " 👑" : ""}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">Wins </span>
            {player.wins}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Losses{" "}
            </span>
            {player.losses}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Perfect Games{" "}
            </span>
            {player.perfectGames}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Avg Score{" "}
            </span>
            {player.avgScore ? parseFloat(player.avgScore).toFixed(2) : "-"}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Avg Op. Score{" "}
            </span>
            {player.avgOpScore ? parseFloat(player.avgOpScore).toFixed(2) : "-"}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Most Wins Against{" "}
            </span>
            {player.mostWinsAgainst}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Most Losses Against{" "}
            </span>
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
            <div className="leaderboard__item-value--pos">Pos</div>
            <div className="leaderboard__item-value">Name</div>
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
