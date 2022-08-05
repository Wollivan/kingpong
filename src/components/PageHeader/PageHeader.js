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
        <span className="blink">_</span>{" "}
      </h1>
      <p>worlds most competetive table tennis environment</p>
      <br />
      <br />
      <p>rank is determined by win rate, then elo, then point difference</p>{" "}
      <br />
      <p>win rate = W / (W+L)</p>
      <br />
      <p>
        elo = win makes rating go up, loss makes rating go down. difference in
        opponents elo determines by how much
      </p>
      <br />
      <p>point difference = difference in points</p>
    </header>
  );
}
