import React, { Component } from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MovieSnapShot from "../MovieSnapShot/MovieSnapShot";
import { getSingleMovieData } from "../apiCalls";
import { singleMovieCleaner, trailerCleaner } from "../utility.js";
import { Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Route exact path="/" render={ () => <HomePage/>}/>
      <Route exact path="/:id" render={({ match }) => 
      <MovieSnapShot id={match.params.id}/>}/>
    </>
   )

}

export default App;
