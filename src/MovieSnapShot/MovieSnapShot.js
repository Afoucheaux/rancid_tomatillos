import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import singleMovie from "../data/singleMovie.js";
import "./MovieSnapShot.css";

class MovieSnapShot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleMovie: singleMovie.movie
    }
  }

  render() {
    return (
      <div className="background-img" style={{backgroundImage: `url(${this.state.singleMovie.backdrop_path})`}}>
        <Header onHomeClick={this.props.onHomeClick}/>
        <MovieCard
          key={this.state.singleMovie.id}
          id={this.state.singleMovie.id}
          posterImage={this.state.singleMovie.poster_path}
          title={this.state.singleMovie.title}
          averageRating={this.state.singleMovie.average_rating.toFixed(1)}
          releaseDate={this.state.singleMovie.release_date}
        />
        <Footer />
      </div>
    )
  }
}

export default MovieSnapShot;
