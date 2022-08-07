import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="center">
      <h3>welcome to kingpong</h3>

<p>click the crown to view the leaderboard or add a player</p>

<p>click the bat to add a game</p>

<p>click the swords to challenge another player or check if you've been challenged6€</p>

<p>click the chat bubble to talk to your fellow competitors</p>

<p>each month the table will reset and we will have a new kingpong in the hall of fame</p>

    </div>
  );
}
