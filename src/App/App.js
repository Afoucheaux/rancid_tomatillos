import React, { Component } from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MovieSnapShot from "../MovieSnapShot/MovieSnapShot";
import { getSingleMovieData } from "../apiCalls";

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickedMovieId: "",
      singleMovie: {},
      trailer: {}
    }
  }

  onMovieClick = (id) => {
    getSingleMovieData(id)
      .then(data => {
        const [singleMovie, trailer] = data;
          this.setState({clickedMovieId: id, singleMovie: singleMovie.movie, trailer: trailer.videos[0]})
      })
      .catch(error => console.log(error))
  }

  onHomeClick = () => {
    this.setState({ clickedMovieId: "" })
  }

  render() {
    return (
      <>
        {!this.state.clickedMovieId ?
        <HomePage onMovieClick={this.onMovieClick}/> : <MovieSnapShot singleMovie={this.state.singleMovie} trailer={this.state.trailer} onHomeClick={this.onHomeClick}/>}
      </>
    )
  }
}

export default App;
