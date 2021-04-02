import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import "./HomePage.css";
import { getMovieData } from "../apiCalls";

class HomePage extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    getMovieData()
    .then(movieData => {
      this.setState({movies: movieData.movies})
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }

  displayMovies = () => {
    const movieList = this.state.movies.map(movie => {
      return <MovieCard
        key={movie.id}
        id={movie.id}
        posterImage={movie.poster_path}
        title={movie.title}
        averageRating={movie.average_rating.toFixed(1)}
        releaseDate={movie.release_date}
        classStyle={"card-container"}
        imageStyle={"card-image"}
      />
    })
    return movieList;
  }

  render() {
    return (
       <>
        <Header hide={"hidden"}/>
        <main className="movies-container">
          {!this.state.error && !this.state.movies.length && <h1 data-cy="page-load-message">Loading...</h1>}
          {this.state.error && <h1 className="load-error">Oops! We are broke! Please refer to the contact below and hire us..get it..we are broke</h1>}
          {this.displayMovies()}
        </main>
        <Footer/>
       </>
    )
  }
}

export default HomePage;
