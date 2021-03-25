import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import movieData from "../data/movies.js";
import "./HomePage.css";


class HomePage extends Component {
  constructor() {
    super()
    this.state= {
      movies: movieData.movies,
    }
  }
  
  displayMovies = () => {
    const movieList = this.state.movies.map(movie => {
      return <MovieCard 
        key={movie.id} 
        id={movie.id} 
        posterImage={movie.poster_path} 
        title={movie.title} 
        averageRating={movie.average_rating.toFixed(1)} 
        releaseDate={movie.release_date}/>
    })
    return movieList; 
  }

  render() {
    return (
       <>
        <Header/>
        <main>
          {this.displayMovies()}
        </main>
        <Footer/>
       </>  
    )
  }
}

export default HomePage;
