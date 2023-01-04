import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesList.scss";

export default function ChallengesList({ challenges, setAddGameForm, players }) {
  const getOutput = () => {
    let output = challenges.map((challenge, i) => {
      const playerOne = players.find((player) => {
        return player.name === challenge.playerOneName;
      });
      const playerTwo = players.find((player) => {
        return player.name === challenge.playerTwoName;
      });
      console.log(playerOne);
      console.log(playerTwo);

      return (
        <Link
          className="challenges__challenge-list-item"
          key={i}
          onClick={() => acceptChallenge(challenge.playerOneName, challenge.playerTwoName)}
          to="/games"
        >
          <div className="challenges__challenge-list-item-details">
            <div className="challenges__challenge-list-item-details-player-one">{challenge.playerOneName}</div>
            <div className="challenges__challenge-list-item-details-v">v</div>

            <div className="challenges__challenge-list-item-details-player-two">{challenge.playerTwoName}</div>
          </div>
        </Link>
      );
    });
    return output;
  };

  const acceptChallenge = (playerOneName, playerTwoName) => {
    setAddGameForm({
      playerOneName,
      playerTwoName,
      playerOneScore: "",
      playerTwoScore: "",
    });
  };
  if (challenges) {
    return (
      <div className="games center">
        <h2>Outgoing Challenges</h2>
        <p>when you add the results of a challenge it will be removed from the list</p>
        <div className="games__game-list">
          {challenges.length === 0 ? (
            <div className="challenges__challenge-list-item">
              <div className="challenges__challenge-list-item-details">
                <div className="challenges__challenge-list-item-details-no-challenges">
                  trying to fetch data<span className="dot1">.</span>
                  <span className="dot2">.</span>
                  <span className="dot3">.</span>
                </div>
              </div>
            </div>
          ) : players.length !== 0 ? (
            getOutput()
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}
