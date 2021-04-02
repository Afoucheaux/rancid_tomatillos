import React from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MovieSnapShot from "../MovieSnapShot/MovieSnapShot";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/:id" render={({ match }) =>
      <MovieSnapShot id={match.params.id}/>}/>
    </>
   )

}

export default App;
