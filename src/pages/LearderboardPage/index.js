import React, { useEffect, useState } from "react";
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
  const [rankModal, setRankModal] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const showModal = () => {
    setRankModal(!rankModal);
    console.log(rankModal);
  };

  return (
    <div>
      <div className="center">
        <button class="button" onClick={showModal}>
          {rankModal ? "hide rank details" : "how is rank decided"}
        </button>
        <div className={`rank-modal ${rankModal ? "show" : ""}`}>
          <h3>rank</h3>
          <p>
            rank is determined by win rate then average point difference then
            crown wins
          </p>{" "}
          <p>win rate = W / (W+L)</p>
          <p>point difference = difference in points</p>
          <p>crown wins = wins while you're the kingpong</p>
          <br />
          {/* <p>
        elo = point increase/decrease on win/loss based on relative skill to
        opponent
      </p> */}
        </div>
        <h3>who is the kingpong</h3>
        <p>👑 = current kingpong</p>
        <p>to take the crown defeat the current king</p>
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
