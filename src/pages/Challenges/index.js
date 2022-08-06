import React from "react";
// import GameList from "../../components/GameList/GameList";
// import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
// import axios from "axios";
// import { PLAYERS_API, GAMES_API, CHALLENGES_API } from "../../utils/api";
// import AddGameForm from "../../components/AddGameForm/AddGameForm";
// import AddPlayerForm from "../../components/AddPlayerForm/AddPlayerForm";
import AddChallengeForm from "../../components/AddChallengeForm/AddChallengeForm";
import ChallengesList from "../../components/ChallengesList/ChallengesList";

export default function Challenges({
  players,
  getPlayersList,
  getChallengesList,
  challenges,
}) {
  return (
    <div>
      <AddChallengeForm
        players={players}
        getPlayersList={getPlayersList}
        getChallengesList={getChallengesList}
      />
      <ChallengesList challenges={challenges} />
    </div>
  );
}
