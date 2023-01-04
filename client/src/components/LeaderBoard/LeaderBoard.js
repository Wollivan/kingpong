import React, { useState } from "react";
import "./LeaderBoard.scss";

export default function LeaderBoard({ players, details, toggleDetails, setPlayers }) {
  // const [showPlayers, setShowPlayers] = useState(players);

  // const handleShow = (playerName) => {
  //   const newShowPlayers = [...players];

  //   newShowPlayers.forEach((player) => {
  //     console.log(player);
  //     if (player.name === playerName) {
  //       player.show = player.show ? false : true;
  //     }
  //   });
  //   setPlayers(newShowPlayers);
  //   console.log(newShowPlayers);
  // };
  const [topName, setTopName] = useState("");
  const [sortCategory, setSortCategory] = useState("wins");
  const [sortOrder, setSortOrder] = useState("low");

  const taunts = [
    "is cruisin' for a bruisin'",
    "said he is ready to lose now",
    "can't stay on top forever",
    "bought his place on top",
    "is secretly Ma Long is a skin suit",
    "is an ice climber main",
    "smells",
    "has asked that his opponents start each game with 8 points, to keep it fair",
    "was always picked last in P.E.",
    "has been eating his shredded wheat",
  ];
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
      const winRate = parseFloat(player.wins) / (parseFloat(player.wins) + parseFloat(player.losses));
      player.winRate = winRate;

      // point difference
      const pointDiff = parseFloat(player.avgScore) - parseFloat(player.avgOpScore);
      player.pointDiff = pointDiff;

      // add show property for whether or not to show details
      player.show = false;
    });

    //sort by win rate. In case of a draw, point diff is used, otherwise crown wins
    let rankedPlayers = [...players];
    rankedPlayers.sort((a, b) => {
      if (a.tiMetric === b.tiMetric) {
        return a.pointDiff < b.pointDiff ? 1 : -1;
      } else {
        return a.tiMetric < b.tiMetric ? 1 : -1;
      }
    });

    // add rank and position to objects for sorting
    rankedPlayers.forEach((player, idx) => {
      player.rank = idx + 1;
      player.position = ordinal_suffix_of(idx + 1);
    });

    // breaks if this runs every time
    if (topName === "") {
      setTopName(rankedPlayers[0].name + " " + taunts[Math.floor(Math.random() * taunts.length)]);
    }
    // crowns for winner in each column
    // function to return the value of the highest value of a property in an array
    const checkIfHighest = (prop) => {
      return Math.max(...players.map((player) => parseFloat(player[prop])));
    };

    // function to return the value of the loweest value of a property in an array
    const checkIfLowest = (prop) => {
      return players.reduce((prev, curr) => (prev[prop] < curr[prop] ? prev : curr))[prop];
    };

    console.log(checkIfLowest("losses"));

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

    let output = rankedPlayers
      // .sort((a, b) => {
      //   if (sortOrder === "low") {
      //     return a[sortCategory] < b[sortCategory] ? 1 : -1;
      //   } else {
      //     return a[sortCategory] < b[sortCategory] ? -1 : 1;
      //   }
      // })
      .map((player, index) => {
        if (parseInt(player.wins) === 0 && parseInt(player.losses) === 0) {
          return "";
        } else {
          const lastAboveOne = player.tiMetric >= 100 && rankedPlayers[index + 1]?.tiMetric < 100 ? "last-above-one" : "";
          const firstBelowOne = player.tiMetric < 100 && rankedPlayers[index - 1]?.tiMetric >= 100 ? "first-below-one" : "";

          return (
            <div
              className={`leaderboard__item ${player.show ? "hide-details" : ""} ${lastAboveOne} ${firstBelowOne}`}
              key={player.position}
            >
              <div className="leaderboard__item-value--pos bold">
                <span className="leaderboard__item-value-mobile-label">Position </span>
                {player.position}
              </div>
              <div className="leaderboard__item-value">
                <span className="leaderboard__item-value-mobile-label">Name </span>
                <span className="playernamecap">
                  {/* {player.name} {player.hasGoldenMonkey ? " 👑" : ""} */}
                  {index === 0 ? "👑 " : ""}
                  {player.name}
                </span>
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
              {/* <div className="leaderboard__item-value">
            <span className="leaderboard__item-value-mobile-label">
              Win Rate
            </span>
            {!isNaN(player.winRate)
              ? parseFloat(player.winRate).toFixed(2)
              : "-"}
          </div> */}
              <div className="leaderboard__item-value">
                <span className="leaderboard__item-value-mobile-label">
                  <span className="case">T.I.M.</span>
                </span>
                {parseFloat(player.tiMetric / 100).toFixed(2)}
              </div>{" "}
              <div className="leaderboard__item-value">
                <span className="leaderboard__item-value-mobile-label">% of pool</span>
                {((parseFloat(player.tiMetric / 100).toFixed(2) / players.length) * 100).toFixed(2)}%
              </div>
              <div className="leaderboard__item-value canhide">
                <span className="leaderboard__item-value-mobile-label">Wins </span>
                {player.wins}
                {checkIfHighest("wins") === parseInt(player.wins) ? " ☆" : ""}
              </div>
              <div className="leaderboard__item-value canhide">
                <span className="leaderboard__item-value-mobile-label">Losses </span>
                {player.losses}
                {parseFloat(checkIfLowest("losses")) === parseFloat(player.losses) ? " ☆" : ""}
              </div>
              {/* <div className="leaderboard__item-value canhide">
              <span className="leaderboard__item-value-mobile-label">Streak | Longest </span>
              {player.currentStreak} | {player.highestStreak}
            </div> */}
              <div className="leaderboard__item-value canhide">
                <span className="leaderboard__item-value-mobile-label">Perfect Games </span>
                {player.perfectGames}
                {checkIfHighest("perfectGames") === parseInt(player.perfectGames) ? " ☆" : ""}
              </div>
              <div className="leaderboard__item-value canhide">
                <span className="leaderboard__item-value-mobile-label">Avg Point Diff </span>
                {!isNaN(player.pointDiff) ? parseFloat(player.pointDiff).toFixed(2) : "-"}
                {checkIfHighest("pointDiff") === parseFloat(player.pointDiff) ? " ☆" : ""}
              </div>
              <div className="leaderboard__item-value canhide">
                <span className="leaderboard__item-value-mobile-label">Avg Score </span>
                {player.avgScore ? parseFloat(player.avgScore).toFixed(2) : "-"}
                {checkIfHighest("avgScore") === parseFloat(player.avgScore) ? " ☆" : ""}
              </div>
              <div className="leaderboard__item-value canhide">
                <span className="leaderboard__item-value-mobile-label">Avg Op. Score </span>
                {player.avgOpScore ? parseFloat(player.avgOpScore).toFixed(2) : "-"}
                {checkIfLowest("avgOpScore") === parseFloat(player.avgOpScore) ? " ☆" : ""}
              </div>
              <div className="leaderboard__item-value canhide">
                <span className="leaderboard__item-value-mobile-label">
                  <span className="case">highest T.I.M.</span>
                </span>
                {parseFloat(player.highestTIM / 100).toFixed(2)}
                {checkIfHighest("highestTIM") === player.highestTIM ? "	☆" : ""}
              </div>
              {/* <div className="leaderboard__item-value canhide">
              <span className="leaderboard__item-value-mobile-label">Crown Wins </span>
              {player.kingpongCount}
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
              {/* <button
            onClick={() => {
              handleShow(player.name);
            }}
          >
            Show
          </button> */}
            </div>
          );
        }
      });
    return output;
  };

  if (players) {
    return (
      <>
        <button onClick={toggleDetails} className="toggle-details button">
          {details ? "Show" : "Hide"} Stats
        </button>
        <p className="center">{topName}</p>
        <div className={`leaderboard ${details ? "hide-details" : ""}`}>
          <div className="leaderboard__item--header">
            <div className="leaderboard__item-value--pos">Pos</div>
            <div className="leaderboard__item-value">Name</div>
            {/* <div className="leaderboard__item-value">Win Rate</div> */}
            <div className="leaderboard__item-value">
              <span className="case">T.I.M.</span>
            </div>
            <div className="leaderboard__item-value">% of pool</div>
            <div className="leaderboard__item-value canhide">Wins</div>
            <div className="leaderboard__item-value canhide">Losses</div>
            {/* <div className="leaderboard__item-value canhide">Streak | Longest</div> */}
            <div className="leaderboard__item-value canhide">Perfect Games</div>
            <div className="leaderboard__item-value canhide">Avg Point Diff</div>
            <div className="leaderboard__item-value canhide">Avg Score</div>
            <div className="leaderboard__item-value canhide">Avg Op. Score</div>
            <div className="leaderboard__item-value canhide">
              <span className="case">highest T.I.M.</span>
            </div>
            {/* <div className="leaderboard__item-value canhide">Crown Wins</div> */}

            {/* <div className="leaderboard__item-value">Most Wins Against</div>
            <div className="leaderboard__item-value">Most Losses Against</div> */}
          </div>
          {players.length === 0 ? (
            <p className="no-players">
              trying to fetch data<span className="dot1">.</span>
              <span className="dot2">.</span>
              <span className="dot3">.</span>
            </p>
          ) : (
            getLeaderBoard()
          )}
        </div>
      </>
    );
  } else {
    return "loading";
  }
}
