import React, { Component } from "react";
import './App.css';
import HomePage from '../HomePage/HomePage';
import MovieSnapShot from '../MovieSnapShot/MovieSnapShot'

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickedMovieId: ''
    }
  }

  onMovieClick = (id) => {
    this.setState({ clickedMovieId: id })
  }

  render() {
    return (
      <>
        {!this.state.clickedMovieId ?
        <HomePage onMovieClick={this.onMovieClick}/> : <MovieSnapShot />}
      </>
    )
  }
}

export default App;
