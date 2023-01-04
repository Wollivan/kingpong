import React, { useState } from "react";
import "./TournamentSelect.scss";

export default function TournamentSelect({
  tournamentCode,
  setTournamentCode,
  tournaments,
}) {
  const [newPasscode, setNewPasscode] = useState("");
  console.log(tournaments);
  const handleChange = (e) => {
    setNewPasscode(e.target.value);
  };

  const handlePasscode = (e) => {
    e.preventDefault();

    let codeError = document.querySelector(".code-error");
    let codeExists = false;
    for (let i = 0; i < tournaments.length; i++) {
      if (tournaments[i].tournamentCode === newPasscode) {
        codeExists = true;
        break;
      }
    }

    if (!codeExists) {
      codeError.classList.add("show");
      codeExists = false;
    } else {
      setNewPasscode("");
      codeError.classList.remove("show");
      localStorage.setItem("tournamentCode", newPasscode.toLowerCase());
      setTournamentCode(newPasscode.toLowerCase());
      window.scrollTo({ top: 0 });
    }
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
        <p className="add-player-form__error-text code-error">
          that isn't a valid tournament code
        </p>
        <button className="button mtop" onClick={handlePasscode}>
          {tournamentCode ? "Change Tournament" : "Unlock Tournament"}
        </button>
        <p>
          to create a new tournament and get a code to give to your players send
          an email to{" "}
          <a
            href="mailto:kingpongapp@gmail.com"
            className="tournament-select__link"
          >
            kingpongapp@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
