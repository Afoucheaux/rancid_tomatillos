import React, { Component } from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MovieSnapShot from "../MovieSnapShot/MovieSnapShot";
import { getSingleMovieData } from "../apiCalls";
import { trailerCleaner} from "../utility"

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickedMovieId: "",
      singleMovie: {},
      trailer: {},
      error: ""
    }
  }

  onMovieClick = (id) => {
    getSingleMovieData(id)
      .then(data => {
        const [singleMovie, trailer] = data;
        const cleanedTrailer = trailerCleaner(trailer);
        this.setState({clickedMovieId: id, singleMovie: singleMovie.movie, trailer: cleanedTrailer[0]})
      })
      .catch(error => this.setState({error: error.message}) )
  }

  onHomeClick = () => {
    this.setState({ clickedMovieId: "" })
  }

  render() {
    return (
      <>
        {!this.state.clickedMovieId ?
        <HomePage onMovieClick={this.onMovieClick}/> : <MovieSnapShot singleMovie={this.state.singleMovie} trailer={this.state.trailer} onHomeClick={this.onHomeClick} error={this.state.error}/>}
      </>
    )
  }
}

export default App;
