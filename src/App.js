import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import Home from "./pages/Home/index";
import LockScreen from "./components/LockScreen/LockScreen";
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

  useEffect(() => {
    console.log("test");
    getPlayersList();
    getGamesList();
    getChallengesList();
  }, []);

  const getPlayersList = () => {
    console.log("This is even running");
    axios
      .get(PLAYERS_API)
      .then((response) => {
        console.log("tryig to get plyaers");
        setPlayers(response.data);
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const getGamesList = () => {
    axios
      .get(GAMES_API)
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

  const getChallengesList = () => {
    axios
      .get(CHALLENGES_API)
      .then((response) => {
        // console.log("get ");
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
        <Nav />
        <div className="App">
          <LockScreen />
          <PageHeader />
          <Switch>
            <Route path="/" exact component={Home} />
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
                  />
                );
              }}
            />
            <Route path="/chat" exact component={Chat} />
          </Switch>
          <PageFooter />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
