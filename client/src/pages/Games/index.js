import React, { useEffect } from "react";
import GameList from "../../components/GameList/GameList";
// import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
// import axios from "axios";
// import { PLAYERS_API, GAMES_API, CHALLENGES_API } from "../../utils/api";
import AddGameForm from "../../components/AddGameForm/AddGameForm";
import AddPlayerForm from "../../components/AddPlayerForm/AddPlayerForm";
// import AddChallengeForm from "../../components/AddChallengeForm/AddChallengeForm";
// import ChallengesList from "../../components/ChallengesList/ChallengesList";

export default function Games({
  players,
  getPlayersList,
  getGamesList,
  games,
  getChallengesList,
  tournamentCode,
  addGameForm,
  setAddGameForm,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <AddGameForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getGamesList}
        getChallengesList={getChallengesList}
        tournamentCode={tournamentCode}
        form={addGameForm}
        setForm={setAddGameForm}
      />
      <AddPlayerForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getGamesList}
        tournamentCode={tournamentCode}
      />
      <GameList games={games} />
    </div>
  );
}
