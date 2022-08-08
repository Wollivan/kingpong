import React, { useEffect } from "react";
import TournamentSelect from "../../components/TournamentSelect/TournamentSelect";
import homeIcon from "../../assets/images/home-icon.png";
import crownIcon from "../../assets/images/crown-icon.png";
import gamesIcon from "../../assets/images/games-icon.png";
import challengesIcon from "../../assets/images/challenges-icon.png";
import chatIcon from "../../assets/images/chat-icon.png";
import "./Home.scss";
export default function Home({ tournamentCode, setTournamentCode }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="center">
      <h3>welcome to kingpong</h3>

      <TournamentSelect setTournamentCode={setTournamentCode} />

      {tournamentCode && (
        <>
          <h3>How to use kingpong</h3>
          <img
            src={crownIcon}
            alt="leaderboard menu item"
            className="home__icon mtoplg"
          />
          <p>view the leaderboard or add a player</p>
          <img
            src={gamesIcon}
            alt="games menu item"
            className="home__icon mtoplg"
          />
          <p>add a game and view past games</p>
          <img
            src={challengesIcon}
            alt="challenge menu item"
            className="home__icon mtoplg"
          />
          <p>challenge another player or check if you've been challenged</p>
          <img
            src={chatIcon}
            alt="chat menu item"
            className="home__icon mtoplg"
          />
          <p>talk to your fellow competitors</p>
        </>
      )}

      {/* <p>
        each month the table will reset and we will have a new kingpong in the
        hall of fame
      </p> */}
    </div>
  );
}
