import { Component } from "react";
import "./styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import Home from "./pages/Home/index";

// import firebase from "firebase/compat/app";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PageHeader />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/games/:gameId/"
              exact
              render={(routerProps) => {
                return <GameDetails {...routerProps} />;
              }}
            />
            {/* <Route path="/method" exact component={Method} /> */}
          </Switch>
          <PageFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
