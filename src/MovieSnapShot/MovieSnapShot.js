import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSnapShot.css";



    const MovieSnapShot = ({ singleMovie, trailer, onHomeClick, error}) => {
    const trailerToPlay = `https://www.youtube.com/embed/${trailer.key}`;
    const genres = singleMovie.genres.join(" | ");
     return (
      <div className="background-img" style={{backgroundImage: `url(${singleMovie.backdrop_path})`}}>
        <Header onHomeClick={onHomeClick}/>
        <main className="single-movie-container">
          {error && <h1>There was an issue, please refresh and try again</h1>}
          <MovieCard
            key={singleMovie.id}
            id={singleMovie.id}
            posterImage={singleMovie.poster_path}
            title={singleMovie.title}
            averageRating={singleMovie.average_rating.toFixed(1)}
            releaseDate={singleMovie.release_date}
          />
          <section className="extra-info-container">
            <p>{singleMovie.overview}</p>
            <p>{genres}</p>
            <p>runtime: {singleMovie.runtime}</p>
            <iframe width="420 height" height="315" src={trailerToPlay}></iframe>
          </section>
        </main>
        <Footer />
      </div>
    )
  // }
}

export default MovieSnapShot;
