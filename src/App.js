import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import Home from "./pages/Home/index";
import axios from "axios";
import { PLAYERS_API, GAMES_API, CHALLENGES_API } from "./utils/api";
import Games from "./pages/Games";
import Challenges from "./pages/Challenges";
import Nav from "./components/Nav/Nav";
import LearderboardPage from "./pages/LearderboardPage";
import Chat from "./pages/Chat";

// import firebase from "firebase/compat/app";

function App() {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [details, setDetails] = useState(true);
  const [tournamentCode, setTournamentCode] = useState("");

  useEffect(() => {
    getPlayersList(tournamentCode);
    getGamesList(tournamentCode);
    getChallengesList(tournamentCode);
    if (localStorage.getItem("tournamentCode")) {
      setTournamentCode(localStorage.getItem("tournamentCode"));
    }
  }, [tournamentCode]);

  const getPlayersList = (tournamentCode) => {
    axios
      .get(PLAYERS_API, { params: { tournamentCode: tournamentCode } })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const getGamesList = (tournamentCode) => {
    axios
      .get(GAMES_API, { params: { tournamentCode: tournamentCode } })
      .then((response) => {
        setGames(response.data.reverse());
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const getChallengesList = (tournamentCode) => {
    axios
      .get(CHALLENGES_API, { params: { tournamentCode: tournamentCode } })
      .then((response) => {
        setChallenges(response.data.reverse());
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const toggleDetails = () => {
    setDetails(!details);
  };

  return (
    <BrowserRouter>
      <>
        {tournamentCode && <Nav />}
        <div className="App">
          {/* <LockScreen /> */}
          <PageHeader />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => {
                return (
                  <Home
                    setTournamentCode={setTournamentCode}
                    tournamentCode={tournamentCode}
                  />
                );
              }}
            />
            <Route
              path="/leaderboard"
              exact
              render={(routerProps) => {
                return (
                  <LearderboardPage
                    players={players}
                    details={details}
                    toggleDetails={toggleDetails}
                    getPlayersList={getPlayersList}
                    getGamesList={getGamesList}
                    tournamentCode={tournamentCode}
                  />
                );
              }}
            />
            <Route
              path="/games"
              exact
              render={(routerProps) => {
                return (
                  <Games
                    players={players}
                    getPlayersList={getPlayersList}
                    getGamesList={getGamesList}
                    games={games}
                    getChallengesList={getChallengesList}
                    tournamentCode={tournamentCode}
                  />
                );
              }}
            />

            <Route
              path="/challenges"
              exact
              render={(routerProps) => {
                return (
                  <Challenges
                    players={players}
                    getPlayersList={getPlayersList}
                    getChallengesList={getChallengesList}
                    challenges={challenges}
                    tournamentCode={tournamentCode}
                  />
                );
              }}
            />
            <Route
              path="/chat"
              exact
              component={Chat}
              tournamentCode={tournamentCode}
            />
          </Switch>
          <PageFooter />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
