import React from "react";
import "./ChallengesList.scss";

export default function ChallengesList({ challenges }) {
  const getOutput = () => {
    let output = challenges.map((challenge, i) => {
      return (
        <div className="challenges__challenge-list-item" key={i}>
          <div className="challenges__challenge-list-item-details">
            <div className="challenges__challenge-list-item-details-player-one">
              {challenge.playerOneName}
            </div>
            <div className="challenges__challenge-list-item-details-v">v</div>

            <div className="challenges__challenge-list-item-details-player-two">
              {challenge.playerTwoName}
            </div>
          </div>
        </div>
      );
    });
    return output;
  };

  if (challenges) {
    return (
      <div className="games center">
        <h2>Outgoing Challenges</h2>
        <p>
          when you add the results of a challenge it will be removed from the
          list
        </p>
        <div className="games__game-list">{getOutput()}</div>
      </div>
    );
  } else {
    return "loading";
  }
}
