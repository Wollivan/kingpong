import React, { useState } from "react";
import "./TournamentSelect.scss";

export default function TournamentSelect({
  tournamentCode,
  setTournamentCode,
}) {
  const [newPasscode, setNewPasscode] = useState("");

  const handleChange = (e) => {
    setNewPasscode(e.target.value);
  };

  const handlePasscode = (e) => {
    e.preventDefault();
    setNewPasscode("");
    localStorage.setItem("tournamentCode", newPasscode);
    setTournamentCode(newPasscode);
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="tournament-select">
      <div className="tournament-select__form">
        <h3>Enter tournament code</h3>
        {tournamentCode ? (
          <>
            <p>
              if you are part of multiple tournaments use this to change which
              one you are interacting with
            </p>
            <p>
              current tournament: <strong>{tournamentCode}</strong>
            </p>
          </>
        ) : (
          <p>
            enter a tournament code to gain access to the leaderboard and add
            games
          </p>
        )}
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
          {tournamentCode ? "Change Tournament" : "Unlock Tournament"}
        </button>
      </div>
    </div>
  );
}
