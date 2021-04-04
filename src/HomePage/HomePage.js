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
      error: "",
      filteredMovies: []
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
    let currentMovieList;
    if(!this.state.filteredMovies.length){
      currentMovieList = this.state.movies
  } else {
      currentMovieList = this.state.filteredMovies
    }

    const movieList = currentMovieList.map(movie => {
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

  displaySearch = (character) => {
    const cleanedCharacter = character.toLowerCase()
    const searchedMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(cleanedCharacter)
    });
    this.setState({filteredMovies: searchedMovies})
  }
  

  render() {
    const movieList = this.displayMovies()
    return (
       <>
        <Header hideHome={"hidden"} displaySearch={this.displaySearch}/>
        <main className="movies-container">
          {!this.state.error && !this.state.movies.length && <h1 data-cy="page-load-message">Loading...</h1>}
          {this.state.error && <h1 className="load-error">Oops! We are broke! Please refer to the contact below and hire us..get it..we are broke</h1>}
          {movieList}
        </main>
        <Footer/>
       </>
    )
  }
}

export default HomePage;
