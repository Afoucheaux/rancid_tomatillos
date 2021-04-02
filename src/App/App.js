import React from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MovieSnapShot from "../MovieSnapShot/MovieSnapShot";
import { Route, Switch } from "react-router-dom";
import ContactPage from "../ContactPage/ContactPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/contact" component={ ContactPage }/>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/:id" render={({ match }) =>
        <MovieSnapShot id={match.params.id}/>}/>
      </Switch>
    </>
   )

}

export default App;
