import React, { Component } from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MovieSnapShot from "../MovieSnapShot/MovieSnapShot";

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickedMovieId: ""
    }
  }

  onMovieClick = (id) => {
    this.setState({ clickedMovieId: id })
  }
  onHomeClick = () => {
    this.setState({ clickedMovieId: "" })
  }

  render() {
    return (
      <>
        {!this.state.clickedMovieId ?
        <HomePage onMovieClick={this.onMovieClick}/> : <MovieSnapShot onHomeClick={this.onHomeClick}/>}
      </>
    )
  }
}

export default App;
