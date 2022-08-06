import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import homeIcon from "../../assets/images/home-icon.png";
import gamesIcon from "../../assets/images/games-icon.png";
import challengesIcon from "../../assets/images/challenges-icon.png";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link to="/" className="nav__links-link">
          <img src={homeIcon} alt="home menu item" className="nav__links-img" />
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
      </div>
    </nav>
  );
}
