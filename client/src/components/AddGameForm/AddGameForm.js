import React, { useState } from "react";
import "./AddGameForm.scss";

export default function AddGameForm({ formTemplate }) {
  const [formValid, setFormValid] = useState(true);
  const [form, setForm] = useState({
    playerOne: "",
    playerTwo: "",
    playerOneScore: "",
    playerTwoScore: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    let formValid = true;

    let playerOne = document.querySelector(".player-one-check");
    let playerOneScore = document.querySelector(".player-one-score-check");
    let playerTwo = document.querySelector(".player-two-check");
    let playerTwoScore = document.querySelector(".player-two-score-check");

    if (!form.playerOne) {
      playerOne.classList.add("show");
      formValid = false;
    } else {
      playerOne.classList.remove("show");
    }
    if (!form.playerOneScore) {
      playerOneScore.classList.add("show");
      formValid = false;
    } else {
      playerOneScore.classList.remove("show");
    }
    if (!form.playerTwo) {
      playerTwo.classList.add("show");
      formValid = false;
    } else {
      playerTwo.classList.remove("show");
    }
    if (!form.playerTwoScore) {
      playerTwoScore.classList.add("show");
      formValid = false;
    } else {
      playerTwoScore.classList.remove("show");
    }

    //make axios call
    if (formValid) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      setFormValid(true);

      // TODO axios call to add the game (which will then do the calculations on the players)
    } else {
      setFormValid(false);
    }
  };

  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      <div className="add-game-form__name-wrap">
        <input
          name="playerOne"
          type="text"
          placeholder="Player One"
          className="add-game-form__input--half"
          value={form.playerOne}
          onChange={handleChange}
        />
        <input
          name="playerTwo"
          type="text"
          placeholder="Player Two"
          className="add-game-form__input--half"
          value={form.playerTwo}
          onChange={handleChange}
        />
      </div>
      <div className="add-game-form__name-wrap">
        <p className="add-game-form__error-text player-one-check">
          This field is required
        </p>

        <p className="add-game-form__error-text player-two-check">
          This field is required
        </p>
      </div>
      <div className="add-game-form__name-wrap">
        <input
          name="playerOneScore"
          type="text"
          placeholder="Player One Score"
          className="add-game-form__input--half"
          value={form.playerOneScore}
          onChange={handleChange}
        />
        <input
          name="playerTwoScore"
          type="text"
          placeholder="Player Two Score"
          className="add-game-form__input--half"
          value={form.playerTwoScore}
          onChange={handleChange}
        />
      </div>
      <div className="add-game-form__name-wrap">
        <p className="add-game-form__error-text player-one-score-check">
          This field is required
        </p>

        <p className="add-game-form__error-text player-two-score-check">
          This field is required
        </p>
      </div>

      <input
        className="button add-game-form__submit"
        type="submit"
        value="Submit"
        id="input-submit"
      />
    </form>
  );
}
