import React, { useEffect, useState } from "react";
import GameList from "../../components/GameList/GameList";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import axios from "axios";
import { PLAYERS_API, GAMES_API } from "../../utils/api";
import AddGameForm from "../../components/AddGameForm/AddGameForm";
import AddPlayerForm from "../../components/AddPlayerForm/AddPlayerForm";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    getPlayersList();
    getGamesList();
  }, []);

  const getPlayersList = () => {
    axios
      .get(PLAYERS_API)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const getGamesList = () => {
    axios
      .get(GAMES_API)
      .then((response) => {
        setGames(response.data.reverse());
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  return (
    <div>
      <LeaderBoard players={players} />
      <AddGameForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getPlayersList}
      />
      <AddPlayerForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getGamesList}
      />
      <GameList games={games} />
    </div>
  );
}
