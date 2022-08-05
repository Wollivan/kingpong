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
        <div className="add-game-form__name-wrap-items">
          <select
            name="playerOneName"
            className="add-game-form__input"
            value={form.playerOneName}
            onChange={handleChange}
          >
            <option>- Player One -</option>
            {players.map((player, i) => {
              return (
                <option value={player.name} key={i}>
                  {player.name}
                </option>
              );
            })}
          </select>
          <p className="add-game-form__error-text player-one-check">
            This field is required 1n
          </p>
        </div>
        <div className="add-game-form__name-wrap-items">
          <input
            name="playerOneScore"
            type="number"
            placeholder="Player One Score"
            className="add-game-form__input"
            value={form.playerOneScore}
            onChange={handleChange}
          />
          <p className="add-game-form__error-text player-one-score-check">
            This field is required 1s
          </p>
        </div>
      </div>
      <div className="add-game-form__name-wrap"></div>
      <div className="add-game-form__name-wrap">
        <div className="add-game-form__name-wrap-items">
          <select
            name="playerTwoName"
            className="add-game-form__input"
            value={form.playerTwoName}
            onChange={handleChange}
          >
            <option>- Player Two -</option>
            {players.map((player, i) => {
              return (
                <option value={player.name} key={i}>
                  {player.name}
                </option>
              );
            })}
          </select>
          <p className="add-game-form__error-text player-two-check">
            This field is required 2n
          </p>
        </div>
        <div className="add-game-form__name-wrap-items">
          <input
            name="playerTwoScore"
            type="number"
            placeholder="Player Two Score"
            className="add-game-form__input"
            value={form.playerTwoScore}
            onChange={handleChange}
          />
          <p className="add-game-form__error-text player-two-score-check">
            This field is required 2s
          </p>
        </div>
      </div>
      <div className="add-game-form__name-wrap"></div>

      <input
        className="button add-game-form__submit"
        type="submit"
        value="Submit"
        id="input-submit"
      />
    </form>
  );
}
