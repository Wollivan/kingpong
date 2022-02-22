import React, { useState } from "react";
import "./AddGameForm.scss";
import axios from "axios";
import { GAMES_API, PLAYERS_API } from "../../utils/api";

export default function AddGameForm({ formTemplate }) {
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
      axios
        .post(GAMES_API, form)
        .then((response) => {
          console.log("New game done");
          //post games returns array of two objects (these are the players)
          // const playerOne = response.data[0];
          // const playerTwo = response.data[1];
          // //edit player one
          // axios
          //   .put(`${PLAYERS_API}/${playerOne.name}`, playerOne)
          //   .then(() => {
          //     //edit plaer two
          //     console.log("player one done");
          //     axios
          //       .put(`${PLAYERS_API}/${playerTwo.name}`, playerTwo)
          //       .then(() => console.log("players updated!"))
          //       .catch();
          //   })
          //   .catch();
        })
        .catch();
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
        .post(GAMES_API, form)
        .then(() => console.log("it worked (we think)"))
        .catch();
    } else {
      setFormValid(false);
    }
  };

  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      <div className="add-game-form__name-wrap">
        <input
          name="playerOneName"
          type="text"
          placeholder="Player One"
          className="add-game-form__input--half"
          value={form.playerOneName}
          onChange={handleChange}
        />
        <input
          name="playerTwoName"
          type="text"
          placeholder="Player Two"
          className="add-game-form__input--half"
          value={form.playerTwoName}
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
