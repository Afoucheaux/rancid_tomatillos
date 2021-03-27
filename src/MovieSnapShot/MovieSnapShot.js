import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import singleMovie from "../data/singleMovie.js";
import "./MovieSnapShot.css";
import trailer from "../data/trailer-data.js";

class MovieSnapShot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleMovie: singleMovie.movie,
      trailerToUse: trailer.videos[0]
    }
  }

  render() {
    const trailerToPlay = `https://www.youtube.com/embed/${this.state.trailerToUse.key}`;
    const genres = this.state.singleMovie.genres.join(" | ");
    return (
      <div className="background-img" style={{backgroundImage: `url(${this.state.singleMovie.backdrop_path})`}}>
        <Header onHomeClick={this.props.onHomeClick}/>
        <main className="single-movie-container">
          <MovieCard
            key={this.state.singleMovie.id}
            id={this.state.singleMovie.id}
            posterImage={this.state.singleMovie.poster_path}
            title={this.state.singleMovie.title}
            averageRating={this.state.singleMovie.average_rating.toFixed(1)}
            releaseDate={this.state.singleMovie.release_date}
          />
          <section className="extra-info-container">
            <p>{this.state.singleMovie.overview}</p>
            <p>{genres}</p>
            <p>runtime: {this.state.singleMovie.runtime}</p>
            <iframe width="420 height" height="315" src={trailerToPlay}></iframe>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default MovieSnapShot;
