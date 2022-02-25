import React from "react";
import "./PageHeader.scss";
import kingpong from "../../assets/images/kingponglogo.jpeg";

export default function PageHeader() {
  return (
    <header className="header">
      <img src={kingpong} alt="kingpong logo" />
      <h1>
        kingpong <span className="version">v0.1</span>
      </h1>
      <p>worlds most competetive table tennis environment</p>
    </header>
  );
}
