import React, { useState, useEffect } from "react";
import "./LeaderBoard.scss";
import GoldenPaddle from "../../assets/images/golden-paddle.png";

export default function LeaderBoard({
  players,
  details,
  toggleDetails,
  setPlayers,
}) {
  const getLeaderBoard = () => {
    // get the players points
    players.forEach((player) => {
      //points
      const winPoints = parseFloat(player.wins) * 3;
      const lossPoints = parseFloat(player.losses) * 1;
      const totalPoints = winPoints + lossPoints;
      player.points = totalPoints;

      //win rate
      //W/ (W+L) * 100
      const winRate =
        parseFloat(player.wins) /
        (parseFloat(player.wins) + parseFloat(player.losses));
      player.winRate = winRate;

      // point difference
      const pointDiff =
        parseFloat(player.avgScore) - parseFloat(player.avgOpScore);
      player.pointDiff = pointDiff;
    });

    //sort by elo. In case of a draw, point diff is used
    players.sort((a, b) => {
      if (a.winRate === b.winRate) {
        return b.pointDiff - a.pointDiff;
        // if (a.elo === b.elo) {
        //   return b.pointDiff - a.pointDiff;
        // } else {
        //   return b.elo - a.elo;
        // }
      } else if (a.winRate > b.winRate) {
        return -1;
      } else if (a.winRate < b.winRate) {
        return 1;
      }

      //return so it stops moaning
      return 1;
    });

    // const players = players.sort((a, b) => {
    //   return b.points - a.points;
    // });

    // is this magic?!
    function ordinal_suffix_of(i) {
      let j = i % 10;
      let k = i % 100;
      if (j === 1 && k !== 11) {
        return i + "st";
      }
      if (j === 2 && k !== 12) {
        return i + "nd";
      }
      if (j === 3 && k !== 13) {
        return i + "rd";
      }
      return i + "th";
    }
    let output = players.map((player, index) => {
      console.log(player);
      return (
        <div
          className={`leaderboard__item ${player.show ? "hide-details" : ""}`}
          key={ordinal_suffix_of(index + 1)}
        >
          <div className="leaderboard__item-value--pos bold">
            <span className="leaderboard__item-value-mobile-label">
              Position{" "}
            </span>
            {ordinal_suffix_of(index + 1)}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">Name </span>
            {player.name} {player.hasGoldenMonkey ? " 👑" : ""}{" "}
            {/* {player.hasGoldenMonkey ? (
              <img
                src={GoldenPaddle}
                alt="golden paddle"
                className="golden-paddle"
              />
            ) : (
              ""
            )} */}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Win Rate
            </span>
            {!isNaN(player.winRate)
              ? parseFloat(player.winRate).toFixed(2)
              : "-"}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Avg Point Diff{" "}
            </span>
            {!isNaN(player.pointDiff)
              ? parseFloat(player.pointDiff).toFixed(2)
              : "-"}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">Wins </span>
            {player.wins}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Losses{" "}
            </span>
            {player.losses}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Perfect Games{" "}
            </span>
            {player.perfectGames}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Avg Score{" "}
            </span>
            {player.avgScore ? parseFloat(player.avgScore).toFixed(2) : "-"}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Avg Op. Score{" "}
            </span>
            {player.avgOpScore ? parseFloat(player.avgOpScore).toFixed(2) : "-"}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Crown Wins{" "}
            </span>
            {player.kingpongCount}
          </div>

          {/* <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">Elo</span>
            {player.elo}
          </div> */}
          {/* <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Most Wins Against{" "}
            </span>
            {player.mostWinsAgainst}
          </div>
          <div className="leaderboard__item-value canhide">
            <span className="leaderboard__item-value-mobile-label">
              Most Losses Against{" "}
            </span>
            {player.mostLossesAgainst}
          </div> */}
        </div>
      );
    });
    return output;
  };

  if (players) {
    return (
      <>
        <h2 className="center">Leaderboard</h2>
        <button onClick={toggleDetails} className="toggle-details button">
          {details ? "Show" : "Hide"} Stats
        </button>
        <div className={`leaderboard ${details ? "hide-details" : ""}`}>
          <div className="leaderboard__item--header">
            <div className="leaderboard__item-value--pos">Pos</div>
            <div className="leaderboard__item-value">Name</div>
            <div className="leaderboard__item-value">Win Rate</div>
            <div className="leaderboard__item-value canhide">
              Avg Point Diff
            </div>
            <div className="leaderboard__item-value canhide">Wins</div>
            <div className="leaderboard__item-value canhide">Losses</div>
            <div className="leaderboard__item-value canhide">Perfect Games</div>
            <div className="leaderboard__item-value canhide">Avg Score</div>
            <div className="leaderboard__item-value canhide">Avg Op. Score</div>
            <div className="leaderboard__item-value canhide">Crown Wins</div>

            {/* <div className="leaderboard__item-value canhide">Elo</div> */}
            {/* <div className="leaderboard__item-value">Most Wins Against</div>
            <div className="leaderboard__item-value">Most Losses Against</div> */}
          </div>
          {players == [] ? (
            getLeaderBoard()
          ) : (
            <p className="no-players">no players to display yet</p>
          )}
        </div>
      </>
    );
  } else {
    return "loading";
  }
}
