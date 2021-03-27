import React, { Component } from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MovieSnapShot from "../MovieSnapShot/MovieSnapShot";

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
    const apiData = [fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`), fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)];

    Promise.all(apiData)
    .then(responses => Promise.all(responses.map(response => response.json())))
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
