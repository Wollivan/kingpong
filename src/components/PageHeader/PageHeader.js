import React from "react";
import "./PageHeader.scss";
// import kingpong from "../../assets/images/kingponglogo.jpeg";
import kingpong from "../../assets/images/kingpong.png";

export default function PageHeader() {
  return (
    <header className="header">
      {/* <span className="version">v0.1</span> */}
      <img src={kingpong} alt="kingpong logo" />
      <h1>
        kingpong
        <span className="blink">_</span>{" "}
      </h1>
      <p>worlds most competetive table tennis environment</p>
      <p>3 points for a win. 1 point for a loss.</p>
    </header>
  );
}
