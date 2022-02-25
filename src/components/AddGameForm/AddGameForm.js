import React, { useState } from "react";
import "./AddGameForm.scss";
import axios from "axios";
import { GAMES_API, PLAYERS_API } from "../../utils/api";

export default function AddGameForm({ players, getPlayersList, getGamesList }) {
  const [formValid, setFormValid] = useState(true);
  const [form, setForm] = useState({
    playerOneName: "",
    playerTwoName: "",
    playerOneScore: "",
    playerTwoScore: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    let formValid = true;

    let playerOneName = document.querySelector(".player-one-check");
    let playerOneScore = document.querySelector(".player-one-score-check");
    let playerTwoName = document.querySelector(".player-two-check");
    let playerTwoScore = document.querySelector(".player-two-score-check");

    if (!form.playerOneName) {
      playerOneName.classList.add("show");
      formValid = false;
    } else {
      playerOneName.classList.remove("show");
    }
    if (!form.playerOneScore) {
      playerOneScore.classList.add("show");
      formValid = false;
    } else {
      playerOneScore.classList.remove("show");
    }
    if (!form.playerTwoName) {
      playerTwoName.classList.add("show");
      formValid = false;
    } else {
      playerTwoName.classList.remove("show");
    }
    if (!form.playerTwoScore) {
      playerTwoScore.classList.add("show");
      formValid = false;
    } else {
      playerTwoScore.classList.remove("show");
    }

    //make axios call
    if (formValid) {
      //add a new game
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      setFormValid(true);
      axios
        .post(GAMES_API, form)
        .then(() => {
          setForm({
            playerOneName: "",
            playerTwoName: "",
            playerOneScore: "",
            playerTwoScore: "",
          });
          getPlayersList();
          getGamesList();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFormValid(false);
    }
  };

  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      <h3>New Game</h3>
      <div className="add-game-form__name-wrap">
        <select
          name="playerOneName"
          className="add-game-form__input--half"
          value={form.playerOneName}
          onChange={handleChange}
        >
          <option>- Player One -</option>
          {players.map((player) => {
            return <option value={player.name}>{player.name}</option>;
          })}
        </select>
        <select
          name="playerTwoName"
          className="add-game-form__input--half"
          value={form.playerTwoName}
          onChange={handleChange}
        >
          <option>- Player Two -</option>
          {players.map((player) => {
            return <option value={player.name}>{player.name}</option>;
          })}
        </select>
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
