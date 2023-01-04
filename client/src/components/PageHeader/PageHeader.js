import React from "react";
import "./PageHeader.scss";
// import kingpong from "../../assets/images/kingponglogo.jpeg";
import kingpong from "../../assets/images/kingpong.png";
import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <header className="header">
      {/* <span className="version">v0.1</span> */}
      <Link to="/" className="nolinkstyle">
        <img src={kingpong} alt="kingpong logo" className="header__logo" />
        <h1 className="header__text-logo">
          kingpong
          <span className="blink">_</span> <span className="version">beta</span>
        </h1>
      </Link>
      <h2>the worlds most competitive table tennis environment</h2>
      <h4>install the app</h4>
      <p>browser menu -&gt; add to home screen</p>
    </header>
  );
}
