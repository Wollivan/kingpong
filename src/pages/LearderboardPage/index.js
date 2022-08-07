import React from "react";
// import GameList from "../../components/GameList/GameList";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
// import axios from "axios";
// import { PLAYERS_API, GAMES_API, CHALLENGES_API } from "../../utils/api";
// import AddGameForm from "../../components/AddGameForm/AddGameForm";
import AddPlayerForm from "../../components/AddPlayerForm/AddPlayerForm";
// import AddChallengeForm from "../../components/AddChallengeForm/AddChallengeForm";
// import ChallengesList from "../../components/ChallengesList/ChallengesList";

export default function Home({
  players,
  getPlayersList,
  getGamesList,
  details,
  toggleDetails,
}) {
  return (
    <div>
      <div className="center">
        <p>rank is determined by win rate then average point difference</p>{" "}
        <p>win rate = W / (W+L)</p>
        {/* <p>
        elo = point increase/decrease on win/loss based on relative skill to
        opponent
      </p> */}
        <p>point difference = difference in points</p>
        <br />
      </div>
      <LeaderBoard
        players={players}
        details={details}
        toggleDetails={toggleDetails}
      />
      <AddPlayerForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getGamesList}
      />
    </div>
  );
}
