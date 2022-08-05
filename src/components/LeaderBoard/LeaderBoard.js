import React from "react";
import "./LeaderBoard.scss";

export default function LeaderBoard({ players, details, toggleDetails }) {
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
    const sortedPlayers = players.sort((a, b) => {
      if (a.winRate === b.winRate) {
        return b.elo - a.elo;
      } else if (a.winRate > b.winRate) {
        return -1;
      } else if (a.winRate < b.winRate) {
        return 1;
      }

      //return so it stops moaning
      return 1;
    });

    // const sortedPlayers = players.sort((a, b) => {
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
            {player.name} {index === 0 ? " 👑" : ""}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">Win Rate</span>
            {player.winRate}
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
              Avg Point Diff{" "}
            </span>
            {player.pointDiff ? parseFloat(player.pointDiff).toFixed(2) : "-"}
          </div>
          <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">Elo</span>
            {player.elo}
          </div>
          {/* <div className="leaderboard__item-value">
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
          </div> */}
        </div>
      );
    });
    return output;
  };

  if (players) {
    return (
      <>
        <button onClick={toggleDetails} className="toggle-details button">
          {details ? "Show" : "Hide"} Details
        </button>
        <div className={`leaderboard ${details ? "hide-details" : ""}`}>
          <div className="leaderboard__item--header">
            <div className="leaderboard__item-value--pos">Pos</div>
            <div className="leaderboard__item-value">Name</div>
            <div className="leaderboard__item-value">winRate</div>
            <div className="leaderboard__item-value canhide">Wins</div>
            <div className="leaderboard__item-value canhide">Losses</div>
            <div className="leaderboard__item-value canhide">Perfect Games</div>
            <div className="leaderboard__item-value canhide">
              Avg Point Diff
            </div>
            <div className="leaderboard__item-value canhide">Avg Score</div>
            <div className="leaderboard__item-value canhide">Avg Op. Score</div>
            <div className="leaderboard__item-value">Elo</div>
            {/* <div className="leaderboard__item-value">Most Wins Against</div>
            <div className="leaderboard__item-value">Most Losses Against</div> */}
          </div>
          {getLeaderBoard()}
        </div>
      </>
    );
  } else {
    return "loading";
  }
}
