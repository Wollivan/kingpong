import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesList.scss";

export default function ChallengesList({ challenges, setAddGameForm }) {
  const getOutput = () => {
    let output = challenges.map((challenge, i) => {
      return (
        <Link
          className="challenges__challenge-list-item"
          key={i}
          onClick={() =>
            acceptChallenge(challenge.playerOneName, challenge.playerTwoName)
          }
          to="/games"
        >
          <div className="challenges__challenge-list-item-details">
            <div className="challenges__challenge-list-item-details-player-one">
              {challenge.playerOneName}
            </div>
            <div className="challenges__challenge-list-item-details-v">v</div>

            <div className="challenges__challenge-list-item-details-player-two">
              {challenge.playerTwoName}
            </div>
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
        <p>
          when you add the results of a challenge it will be removed from the
          list
        </p>
        <div className="games__game-list">
          {challenges.length === 0 ? (
            <div className="challenges__challenge-list-item">
              <div className="challenges__challenge-list-item-details">
                <div className="challenges__challenge-list-item-details-no-challenges">
                  no challenges
                </div>
              </div>
            </div>
          ) : (
            getOutput()
          )}
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}
