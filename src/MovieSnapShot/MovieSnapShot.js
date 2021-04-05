import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import MovieInfo from "../MovieInfo/MovieInfo";
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
    .catch(error => this.setState({clickedMovieId: id, error: error.message}) )
  }

  render () {
   if(!this.state.error && !this.state.clickedMovieId) {
    return (<h1 data-cy="loading-single">Loading movie....</h1>)
  } else if(this.state.error && this.state.clickedMovieId) {
    return <h1 data-cy="single-movie-error">There was an issue, please refresh and try again</h1>
  } else {
    const styles = {
        background: this.state.singleMovie.backdrop_path ? `-webkit-linear-gradient(rgba(0,0,0, .3) 0%,rgba(0,0,0, 1) 100%), url(${this.state.singleMovie.backdrop_path}) no-repeat center center fixed` : null,
        backgroundSize: "cover"
    }
    return (
      <div className="background-img" style={styles}>
        <Header hideSearch={"hidden"}/>
        <main className="single-movie-container">
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
          <MovieInfo 
            singleMovie={this.state.singleMovie} 
            trailer={this.state.trailer}
          />
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
