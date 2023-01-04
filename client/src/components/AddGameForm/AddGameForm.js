import React from "react";
import "./AddGameForm.scss";
import axios from "axios";
import { GAMES_API } from "../../utils/api";

export default function AddGameForm({
  players,
  getPlayersList,
  getGamesList,
  getChallengesList,
  tournamentCode,
  form,
  setForm,
}) {
  //form state is stored in app so we can use it to click on challenges and populate the form

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
      return formValid;
    } else {
      return formValid;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      axios
        .post(GAMES_API, { ...form, tournamentCode })
        .then(() => {
          setForm({
            ...form,
            playerOneScore: "",
            playerTwoScore: "",
          });
          getPlayersList();
          getGamesList();
          getChallengesList();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("git gud");
    }
  };

  // sort players by name without changing leaderboard order
  const playersList = [...players];
  playersList.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      {/* <button onClick={tempAddGames}>temp add games</button> */}
      <h2 className="page-title">New Game</h2>
      <p className="center">games should be first to 11 with 2 serves at a time</p>
      <div className="add-game-form__name-wrap">
        <div className="add-game-form__name-wrap-items">
          <select name="playerOneName" className="add-game-form__input" value={form.playerOneName} onChange={handleChange}>
            <option>- Player One -</option>
            {playersList.map((player, i) => {
              return (
                <option value={player.name} key={i}>
                  {player.name}
                </option>
              );
            })}
          </select>
          <p className="add-game-form__error-text player-one-check">This field is required</p>
        </div>
        <div className="add-game-form__name-wrap-items">
          <input
            name="playerOneScore"
            type="number"
            autoComplete="off"
            placeholder="Player One Score"
            className="add-game-form__input"
            value={form.playerOneScore}
            onChange={handleChange}
          />
          <p className="add-game-form__error-text player-one-score-check">This field is required</p>
        </div>
      </div>
      <div className="add-game-form__name-wrap"></div>
      <div className="add-game-form__name-wrap">
        <div className="add-game-form__name-wrap-items">
          <select name="playerTwoName" className="add-game-form__input" value={form.playerTwoName} onChange={handleChange}>
            <option>- Player Two -</option>
            {playersList.map((player, i) => {
              return (
                <option value={player.name} key={i}>
                  {player.name}
                </option>
              );
            })}
          </select>
          <p className="add-game-form__error-text player-two-check">This field is required</p>
        </div>
        <div className="add-game-form__name-wrap-items">
          <input
            name="playerTwoScore"
            type="number"
            autoComplete="off"
            placeholder="Player Two Score"
            className="add-game-form__input"
            value={form.playerTwoScore}
            onChange={handleChange}
          />
          <p className="add-game-form__error-text player-two-score-check">This field is required</p>
        </div>
      </div>
      <div className="add-game-form__name-wrap"></div>

      <input className="button add-game-form__submit" type="submit" value="Submit" id="input-submit" />
      <p className="center">player stats are recalculated after each new game is submmited</p>
    </form>
  );
}
