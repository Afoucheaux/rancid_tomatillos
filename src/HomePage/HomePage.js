import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
// import movieData from "../data/movies.js";
import "./HomePage.css";


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state= {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(movieData => {
      this.setState({movies: movieData.movies})
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }

  handleMovieClick = (event) => {
    const idToPass = event.target.parentNode.id;
    this.props.onMovieClick(idToPass);
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
        handleMovieClick={this.handleMovieClick}
      />
    })
    return movieList;
  }

  render() {
    return (
       <>
        <Header hide={"hidden"}/>
        <main className="movies-container">
          {!this.state.error && !this.state.movies.length && <h1>Loading...</h1>}
          {this.state.error && <h1>Oops! We are broke! Please refer to the contact below and hire us</h1>}
          {this.displayMovies()}
        </main>
        <Footer/>
       </>
    )
  }
}

export default HomePage;
