import React, { useEffect, useState } from "react";
import GameList from "../../components/GameList/GameList";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import axios from "axios";
import { PLAYERS_API, GAMES_API, CHALLENGES_API } from "../../utils/api";
import AddGameForm from "../../components/AddGameForm/AddGameForm";
import AddPlayerForm from "../../components/AddPlayerForm/AddPlayerForm";
import AddChallengeForm from "../../components/AddChallengeForm/AddChallengeForm";
import ChallengesList from "../../components/ChallengesList/ChallengesList";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [details, setDetails] = useState(true);

  useEffect(() => {
    getPlayersList();
    getGamesList();
    getChallengesList();
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

  const getChallengesList = () => {
    axios
      .get(CHALLENGES_API)
      .then((response) => {
        // console.log("get ");
        setChallenges(response.data.reverse());
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const toggleDetails = () => {
    setDetails(!details);
  };

  return (
    <div>
      <LeaderBoard
        players={players}
        details={details}
        toggleDetails={toggleDetails}
      />
      <AddGameForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getGamesList}
      />
      <AddChallengeForm
        players={players}
        getPlayersList={getPlayersList}
        getChallengesList={getChallengesList}
      />
      <ChallengesList challenges={challenges} />
      <AddPlayerForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getGamesList}
      />
      <GameList games={games} />
    </div>
  );
}
