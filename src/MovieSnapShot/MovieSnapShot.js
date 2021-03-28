import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import { trailerCleaner } from "../utility.js";
import "./MovieSnapShot.css";

    const MovieSnapShot = ({ singleMovie, trailer, onHomeClick, error}) => {
    // const trailerToPlay = `https://www.youtube.com/embed/${trailer.key}`;
    const cleanedTrailer = trailerCleaner(trailer);
    const genres = singleMovie.genres.join(" | ");
    const styles = {
      background:`-webkit-linear-gradient(rgba(0,0,0, .3) 0%,rgba(0,0,0, 1) 100%), url(${singleMovie.backdrop_path}) no-repeat center center fixed`,
      backgroundSize: "cover"
    }
     return (
      <div className="background-img" style={styles}>
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
            classStyle={"card-container-single-movie"}
            imageStyle={"no-image-hover"}
          />
          <section className="extra-info-container">
            {!cleanedTrailer && <h1 className="extra-info-trailer">Trailer Unavailable</h1>}
            {cleanedTrailer && <iframe className="extra-info-trailer" src={cleanedTrailer} aria-label={`${singleMovie.title} trailer`}></iframe>}
            <p className="extra-info">{singleMovie.overview}</p>
            <p className="extra-info">{genres}</p>
            <p className="extra-info">Runtime: {singleMovie.runtime} min</p>
          </section>
        </main>
        <Footer />
      </div>
    )
  // }
}

export default MovieSnapShot;
