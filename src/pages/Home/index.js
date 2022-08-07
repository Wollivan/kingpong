import React from "react";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import AddPlayerForm from "../../components/AddPlayerForm/AddPlayerForm";

export default function Home({
  players,
  getPlayersList,
  getGamesList,
  details,
  toggleDetails,
}) {
  return (
    <div className="center">
      <p>welcome to kingpong</p>
    </div>
  );
}
