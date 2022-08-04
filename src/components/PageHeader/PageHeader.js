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
      <p>rank is decided by highest win rate, then point difference</p>
      <br />
      <br />
      <p>win rate = W / (W+L)</p>
      <p>point difference = difference in points</p>
    </header>
  );
}
