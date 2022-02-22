import React from "react";
import AddGameForm from "../../components/AddGameForm/AddGameForm";
import GameList from "../../components/GameList/GameList";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";

export default function Home() {
  return (
    <div>
      <LeaderBoard />
      <AddGameForm />
      <GameList />
    </div>
  );
}
