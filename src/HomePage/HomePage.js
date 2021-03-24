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
      movies: [  {
        id: 501953,
      posterImage: "https://image.tmdb.org/t/p/original//2wXrBtfrvwMWE1i3iHjKjoRZjYk.jpg",
      backdropImage: "https://image.tmdb.org/t/p/original//oeaLQKoPFQxvhEz3yyR1QuestXG.jpg",
      title: "Eternal Beauty",
      averageRating: 3,
      releaseDate: "2020-08-21"
    }],
    }
  }
  render() {
    return (
       <>
        <Header/>
        <main>
          <MovieCard movieInfo={this.state.movies[0]}/>
        </main>
        <Footer/>
       </>  
    )
  }
}

export default HomePage;
