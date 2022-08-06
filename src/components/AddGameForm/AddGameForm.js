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

  const tempAddGames = () => {
    const gamesArr = [
      // {
      //   playerOneName: "Tim Smith",
      //   playerTwoName: "Matt Hood",
      //   playerOneScore: 9,
      //   playerTwoScore: 11,
      // },

      {
        playerOneName: "Tim Smith",
        playerTwoName: "Matt Hood",
        playerOneScore: 11,
        playerTwoScore: 6,
      },

      {
        playerOneName: "Tim Smith",
        playerTwoName: "Matt Hood",
        playerOneScore: 9,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Tim Smith",
        playerTwoName: "Matt Hood",
        playerOneScore: 7,
        playerTwoScore: 1,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 12,
        playerTwoScore: 10,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 10,
        playerTwoScore: 12,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 9,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 8,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "V",
        playerOneScore: 6,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "V",
        playerOneScore: 7,
        playerTwoScore: 11,
      },

      {
        playerOneName: "James Adams",
        playerTwoName: "Matt Hood",
        playerOneScore: 12,
        playerTwoScore: 10,
      },
      {
        playerOneName: "James Adams",
        playerTwoName: "Matt Hood",
        playerOneScore: 7,
        playerTwoScore: 11,
      },
      {
        playerOneName: "James Adams",
        playerTwoName: "Matt Hood",
        playerOneScore: 11,
        playerTwoScore: 7,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "Fred Hoffman",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Fred Hoffman",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Fred Hoffman",
        playerOneScore: 10,
        playerTwoScore: 12,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "Tim Smith",
        playerOneScore: 8,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Tim Smith",
        playerOneScore: 11,
        playerTwoScore: 6,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Tim Smith",
        playerOneScore: 10,
        playerTwoScore: 12,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "Fred Hoffman",
        playerOneScore: 8,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Fred Hoffman",
        playerOneScore: 10,
        playerTwoScore: 12,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 9,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 8,
      },

      {
        playerOneName: "Tim Smith",
        playerTwoName: "Kane St Quintin",
        playerOneScore: 8,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Tim Smith",
        playerTwoName: "Kane St Quintin",
        playerOneScore: 11,
        playerTwoScore: 8,
      },
      {
        playerOneName: "Tim Smith",
        playerTwoName: "Kane St Quintin",
        playerOneScore: 7,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "Mehdi Khiabani",
        playerOneScore: 3,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Mehdi Khiabani",
        playerOneScore: 8,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Mehdi Khiabani",
        playerTwoName: "Tim Smith",
        playerOneScore: 7,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Mehdi Khiabani",
        playerTwoName: "Tim Smith",
        playerOneScore: 3,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Fred Hoffman",
        playerTwoName: "Luca Feser",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
      {
        playerOneName: "Fred Hoffman",
        playerTwoName: "Luca Feser",
        playerOneScore: 11,
        playerTwoScore: 7,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "JJ Waters",
        playerOneScore: 3,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "JJ Waters",
        playerOneScore: 3,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "Luca Feser",
        playerOneScore: 10,
        playerTwoScore: 12,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Luca Feser",
        playerOneScore: 7,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 5,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 7,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 12,
        playerTwoScore: 10,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 7,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 10,
        playerTwoScore: 12,
      },

      {
        playerOneName: "JJ Waters",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 8,
      },
      {
        playerOneName: "JJ Waters",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 6,
      },

      {
        playerOneName: "Fred Hoffman",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
      {
        playerOneName: "Fred Hoffman",
        playerTwoName: "James Adams",
        playerOneScore: 7,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Fred Hoffman",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 7,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Ford",
        playerOneScore: 10,
        playerTwoScore: 12,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Ford",
        playerOneScore: 9,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 12,
        playerTwoScore: 10,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Adams",
        playerOneScore: 11,
        playerTwoScore: 7,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Ford",
        playerOneScore: 6,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "James Ford",
        playerOneScore: 4,
        playerTwoScore: 11,
      },

      {
        playerOneName: "Matt Hood",
        playerTwoName: "Tim Smith",
        playerOneScore: 8,
        playerTwoScore: 11,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Tim Smith",
        playerOneScore: 11,
        playerTwoScore: 9,
      },
      {
        playerOneName: "Matt Hood",
        playerTwoName: "Tim Smith",
        playerOneScore: 11,
        playerTwoScore: 3,
      },

      {
        playerOneName: "Kane St Quintin",
        playerTwoName: "Luca Feser",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
      {
        playerOneName: "Kane St Quintin",
        playerTwoName: "Luca Feser",
        playerOneScore: 11,
        playerTwoScore: 7,
      },

      {
        playerOneName: "JJ Waters",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 8,
      },
      {
        playerOneName: "JJ Waters",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 9,
      },

      {
        playerOneName: "Luca Feser",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
      {
        playerOneName: "Luca Feser",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
      {
        playerOneName: "Luca Feser",
        playerTwoName: "V",
        playerOneScore: 11,
        playerTwoScore: 7,
      },
    ];
    gamesArr.forEach((game, i) => {
      setTimeout(() => {
        axios
          .post(GAMES_API, game)
          .then(() => {
            console.log("Added", game);
          })
          .catch((err) => {
            console.log(err);
          });
      }, i * 1000);
    });
  };
  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      {/* <button onClick={tempAddGames}>temp add games</button> */}
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
            This field is required
          </p>
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
          <p className="add-game-form__error-text player-one-score-check">
            This field is required
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
            This field is required
          </p>
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
          <p className="add-game-form__error-text player-two-score-check">
            This field is required
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
      <p className="center">
        player stats are recalculated after each new game is submmited
      </p>
    </form>
  );
}
