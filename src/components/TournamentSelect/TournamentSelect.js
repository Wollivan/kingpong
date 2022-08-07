import React, { useState, useEffect } from "react";
import { passcode } from "../../utils/passcode";
import "./TournamentSelect.scss";

export default function TournamentSelect() {
  const [lockScreen, setlockScreen] = useState(true);
  const [newPasscode, setNewPasscode] = useState("");

  useEffect(() => {
    checkLock();
  }, [newPasscode]);

  const handleChange = (e) => {
    setNewPasscode(e.target.value);
  };

  const checkLock = () => {
    if (localStorage.getItem("passcode") === passcode) {
      setlockScreen(false);
      return true;
    }
    return false;
  };

  const handlePasscode = (e) => {
    e.preventDefault();
    console.log("test");
    localStorage.setItem("passcode", newPasscode);
    const check = checkLock();
    const passcodeInput = document.querySelector(
      ".tournament-select__form-error-text"
    );
    if (!check) {
      passcodeInput.classList.add("show");
    } else {
      passcodeInput.classList.remove("show");
    }
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
          placeholder="Enter passcode"
          className="tournament-select__form-input"
        />
        <p className="tournament-select__form-error-text">
          That isn't the password. if you're stuck, ask Tim.
        </p>
        <button className="button mtop" onClick={handlePasscode}>
          Sign In
        </button>
      </div>
    </div>
  );
}
