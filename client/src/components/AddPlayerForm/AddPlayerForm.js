import React, { useState } from "react";
import "./AddPlayerForm.scss";
import axios from "axios";
import { PLAYERS_API } from "../../utils/api";

export default function AddPlayerForm({ players, getPlayersList, getGamesList, tournamentCode }) {
  const [form, setForm] = useState({
    playerName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, tournamentCode });
  };

  const isFormValid = () => {
    let formValid = true;

    let playerNameInput = document.querySelector(".player-check");

    if (!form.playerName) {
      playerNameInput.classList.add("show");
      formValid = false;
    } else {
      playerNameInput.classList.remove("show");
    }

    //check the player name isn't already taken

    let nameUsed = document.querySelector(".name-used");

    let nameNotUsed = true;
    for (let i = 0; i < players.length; i++) {
      if (players[i].name === form.playerName) {
        nameNotUsed = false;
        break;
      }
    }

    if (!nameNotUsed) {
      nameUsed.classList.add("show");
      formValid = false;
    } else {
      nameUsed.classList.remove("show");
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
        .post(PLAYERS_API, { ...form, tournamentCode })
        .then(() => {
          setForm({
            playerName: "",
            tournamentCode,
          });
          getPlayersList();
          getGamesList();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("git gud");
    }
  };

  return (
    <form className="add-player-form" onSubmit={handleSubmit}>
      <h2 className="page-title">new Player</h2>
      <input
        name="playerName"
        className="add-player-form__input--half"
        placeholder="Add New Player"
        value={form.playerName}
        onChange={handleChange}
      />

      <p className="add-player-form__error-text player-check">This field is required</p>
      <p className="add-player-form__error-text name-used">That name is already used</p>
      <input className="button add-player-form__submit" type="submit" value="Submit" id="input-submit" />
    </form>
  );
}
