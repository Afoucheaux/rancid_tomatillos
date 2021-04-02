import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSnapShot.css";
import PropTypes from "prop-types";
import { getSingleMovieData } from "../apiCalls.js"
import { singleMovieCleaner, trailerCleaner } from "../utility.js";

class MovieSnapShot extends Component {
  constructor(props) {
    super(props)
    this.state= {
      clickedMovieId: "",
      singleMovie: {},
      trailer: {},
      error: ""
    }
  }

  componentDidMount() {
    const id = this.props.id
    getSingleMovieData(id)
    .then(data => {
      const [singleMovie, trailer] = data
      const cleanedSingleMovie = singleMovieCleaner(singleMovie);
      const cleanedTrailer = trailerCleaner(trailer);
      this.setState({clickedMovieId: id, singleMovie: cleanedSingleMovie, trailer: cleanedTrailer[0]})
    })
    .catch(error => this.setState({error: error.message}) )
  }

  render () {
   if(!this.state.clickedMovieId) {
    return (<h1 data-cy="loading-single">Loading movie....</h1>)
  } else {
    const trailerToPlay = `https://www.youtube.com/embed/${this.state.trailer.key}`;
    const genres = this.state.singleMovie.genres.join(" | ");
    const styles = {
        background: this.state.singleMovie.backdrop_path ? `-webkit-linear-gradient(rgba(0,0,0, .3) 0%,rgba(0,0,0, 1) 100%), url(${this.state.singleMovie.backdrop_path}) no-repeat center center fixed` : null,
        backgroundSize: "cover"
    }
    return (
      <div className="background-img" style={styles}>
        <Header/>
        <main className="single-movie-container">
          {this.state.error && <h1>There was an issue, please refresh and try again</h1>}
          <MovieCard
            key={this.state.singleMovie.id}
            id={this.state.singleMovie.id}
            posterImage={this.state.singleMovie.poster_path}
            title={this.state.singleMovie.title}
            averageRating={this.state.singleMovie.average_rating.toFixed(1)}
            releaseDate={this.state.singleMovie.release_date}
            classStyle={"card-container-single-movie"}
            imageStyle={"no-image-hover"}
          />
          <section className="extra-info-container">
              <iframe className="extra-info-trailer" src={trailerToPlay} title="Movie Trailer" aria-label={`${this.state.singleMovie.title} trailer`}></iframe>
            <p className="extra-info" data-cy="overview">{this.state.singleMovie.overview}</p>
            <p className="extra-info" data-cy="genre">{genres}</p>
            <p className="extra-info" data-cy="runtime">Runtime: {this.state.singleMovie.runtime} min</p>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
  }
}


export default MovieSnapShot;

MovieSnapShot.propTypes = {
  id: PropTypes.string,
  onHomeClick: PropTypes.func,

}
