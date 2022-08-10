import React, { useEffect } from "react";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import AddPlayerForm from "../../components/AddPlayerForm/AddPlayerForm";

export default function LearderboardPage({
  players,
  getPlayersList,
  getGamesList,
  details,
  toggleDetails,
  tournamentCode,
  setPlayers,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
        setPlayers={setPlayers}
      />
      <AddPlayerForm
        players={players}
        getPlayersList={getPlayersList}
        getGamesList={getGamesList}
        tournamentCode={tournamentCode}
      />
    </div>
  );
}
