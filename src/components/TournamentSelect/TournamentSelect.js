import React, { useState, useEffect } from "react";
import { passcode } from "../../utils/passcode";
import "./TournamentSelect.scss";

export default function TournamentSelect({ tournamentID, setTournamentID }) {
  const [newPasscode, setNewPasscode] = useState("");

  const handleChange = (e) => {
    setNewPasscode(e.target.value);
  };

  const handlePasscode = (e) => {
    e.preventDefault();
    console.log("test");
    localStorage.setItem("passcode", newPasscode);
  };
  return (
    <div className="tournament-select">
      <div className="tournament-select__form">
        <h3>Enter tournament code</h3>
        <p>
          Once you have added a code you will have access to the leaderboard and
          all the goodness that goes with it
        </p>
        <input
          name="passcode"
          onChange={handleChange}
          value={newPasscode}
          placeholder="Enter tournament ID"
          className="tournament-select__form-input"
        />
        <p className="tournament-select__form-error-text">
          That isn't the password. if you're stuck, ask Tim.
        </p>
        <button className="button mtop" onClick={handlePasscode}>
          Unlock Tournament
        </button>
      </div>
    </div>
  );
}
