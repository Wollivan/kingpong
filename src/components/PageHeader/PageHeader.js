import React from "react";
import "./PageHeader.scss";
// import kingpong from "../../assets/images/kingponglogo.jpeg";
import kingpong from "../../assets/images/kingpong.png";

export default function PageHeader() {
  return (
    <header className="header">
      {/* <span className="version">v0.1</span> */}
      <img src={kingpong} alt="kingpong logo" className="header__logo" />
      <h1>
        kingpong
        <span className="blink">_</span> <span className="version">beta</span>
      </h1>
      <h3>worlds most competetive table tennis environment</h3>
      <br />
      <p>rank is determined by win rate then average point difference</p>{" "}
      <p>win rate = W / (W+L)</p>
      {/* <p>
        elo = point increase/decrease on win/loss based on relative skill to
        opponent
      </p> */}
      <p>point difference = difference in points</p>
    </header>
  );
}
