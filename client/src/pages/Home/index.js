import React from "react";
import AddGameForm from "../../components/AddGameForm/AddGameForm";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";

export default function Home() {
  return (
    <div>
      <LeaderBoard />
      <AddGameForm />
    </div>
  );
}
