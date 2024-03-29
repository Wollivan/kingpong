import React, { useState } from "react";
import "./AddChallengeForm.scss";
import axios from "axios";
import { CHALLENGES_API } from "../../utils/api";

export default function AddChallengeForm({ players, getPlayersList, getChallengesList, tournamentCode }) {
  const [form, setForm] = useState({
    playerOneName: "",
    playerTwoName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, tournamentCode });
  };

  const isFormValid = () => {
    let formValid = true;

    let playerOneName = document.querySelector(".challenge-player-one-check");
    let playerTwoName = document.querySelector(".challenge-player-two-check");

    if (!form.playerOneName) {
      playerOneName.classList.add("show");
      formValid = false;
    } else {
      playerOneName.classList.remove("show");
    }

    if (!form.playerTwoName) {
      playerTwoName.classList.add("show");
      formValid = false;
    } else {
      playerTwoName.classList.remove("show");
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
      axios
        .post(CHALLENGES_API, { ...form, tournamentCode })
        .then(() => {
          setForm({
            playerOneName: "",
            playerTwoName: "",
          });
          getPlayersList();
          getChallengesList();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("git gud");
    }
  };

  return (
    <form className="add-challenge-form" onSubmit={handleSubmit}>
      {/* <button onClick={tempAddGames}>temp add games</button> */}
      <h2 className="page-title">Challenge another player</h2>

      <div className="add-challenge-form__name-wrap">
        <div className="add-challenge-form__name-wrap-items">
          <select
            name="playerOneName"
            className="add-challenge-form__input"
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
          <p className="add-challenge-form__error-text challenge-player-one-check">This field is required</p>
        </div>
        <div className="add-challenge-form__name-wrap-items">
          <select
            name="playerTwoName"
            className="add-challenge-form__input"
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
          <p className="add-challenge-form__error-text challenge-player-two-check">This field is required</p>
        </div>
      </div>

      <input className="button add-challenge-form__submit" type="submit" value="Submit" id="input-submit" />
      <p className="center">click on a challenge in the list to enter the result</p>
      <p className="center">challenges are removed when a game between the two players is logged</p>
    </form>
  );
}
