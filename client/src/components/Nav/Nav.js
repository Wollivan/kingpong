import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import homeIcon from "../../assets/images/home-icon.png";
import crownIcon from "../../assets/images/crown-icon.png";
import gamesIcon from "../../assets/images/games-icon.png";
import challengesIcon from "../../assets/images/challenges-icon.png";
// import chatIcon from "../../assets/images/chat-icon.png";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link to="/" className="nav__links-link">
          <img src={homeIcon} alt="home menu item" className="nav__links-img" />
        </Link>
        <Link to="/leaderboard" className="nav__links-link">
          <img
            src={crownIcon}
            alt="leaderboard menu item"
            className="nav__links-img"
          />
        </Link>
        <Link to="/games" className="nav__links-link">
          <img
            src={gamesIcon}
            alt="games menu item"
            className="nav__links-img"
          />
        </Link>
        <Link to="/challenges" className="nav__links-link">
          <img
            src={challengesIcon}
            alt="challenge menu item"
            className="nav__links-img"
          />
        </Link>
        {/* <Link to="/chat" className="nav__links-link">
          <img src={chatIcon} alt="chat menu item" className="nav__links-img" />
        </Link> */}
      </div>
    </nav>
  );
}
