import React, { useState } from "react";
import "./AddPlayerForm.scss";
import axios from "axios";
import { PLAYERS_API } from "../../utils/api";

export default function AddPlayerForm({ getPlayersList }) {
  const [formValid, setFormValid] = useState(true);
  const [form, setForm] = useState({
    playerName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    let formValid = true;

    let playerName = document.querySelector(".player-check");

    if (!form.playerName) {
      playerName.classList.add("show");
      formValid = false;
    } else {
      playerName.classList.remove("show");
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
    console.log(form);
    if (isFormValid()) {
      setFormValid(true);
      axios
        .post(PLAYERS_API, form)
        .then(() => {
          setForm({
            playerName: "",
          });
          getPlayersList();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFormValid(false);
    }
  };

  return (
    <form className="add-player-form" onSubmit={handleSubmit}>
      <h3>New Player</h3>
      <input
        name="playerName"
        className="add-player-form__input--half"
        placeholder="Add New Player"
        value={form.playerName}
        onChange={handleChange}
      />

      <p className="add-player-form__error-text player-check">
        This field is required
      </p>
      <input
        className="button add-player-form__submit"
        type="submit"
        value="Submit"
        id="input-submit"
      />
    </form>
  );
}
