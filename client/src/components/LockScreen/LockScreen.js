import React, { useState, useEffect } from "react";
import { passcode } from "../../utils/passcode";
import "./LockScreen.scss";

export default function LockScreen() {
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
      ".lockscreen__form-error-text"
    );
    if (!check) {
      passcodeInput.classList.add("show");
    } else {
      passcodeInput.classList.remove("show");
    }
  };
  return (
    <>
      {lockScreen && (
        <div className="lockscreen">
          <div className="lockscreen__form">
            <h2>Enter this months passcode (it's on barrel with the bats)</h2>
            <input
              name="passcode"
              onChange={handleChange}
              value={newPasscode}
              placeholder="Enter passcode"
              className="lockscreen__form-input"
            />
            <p className="lockscreen__form-error-text">
              That isn't the password. if you're stuck, ask Tim.
            </p>
            <button className="button mtop" onClick={handlePasscode}>
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  );
}
