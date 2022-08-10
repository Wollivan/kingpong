import React from "react";
import "./GameList.scss";

export default function GameList({ games }) {
  const getOutput = () => {
    let prevDate = ""; // for keeping track of what date has been used
    let dateTitle = true; // the actual title that will sometimes display
    let output = games.map((game, i) => {
      if (prevDate !== game.gameDate.substr(0, game.gameDate.indexOf("T"))) {
        console.log("it is true");
        dateTitle = true;
      } else {
        dateTitle = false;
      }

      // set the date each iteration to see if its changed on the next one
      prevDate = game.gameDate.substr(0, game.gameDate.indexOf("T"));

      let dateToShow = new Date(
        game.gameDate.substr(0, game.gameDate.indexOf("T"))
      );
      return (
        <div className="games__wrap" key={i}>
          {dateTitle && (
            <h3 className="games__wrap-title">
              {dateToShow.toLocaleDateString("en-GB")}
            </h3>
          )}
          <div className="games__game-list-item">
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
            {/* <div className="games__game-list-item-date">
            {game.gameDate.substr(0, game.gameDate.indexOf("T"))}
          </div> */}
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
