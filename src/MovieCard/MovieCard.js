import React from "react";
import "./MovieCard.css"

const MovieCard = ({id, posterImage, title, averageRating, releaseDate, handleMovieClick, classStyle, imageStyle}) => {
  return (
    <article onClick={handleMovieClick} className={classStyle} id={id}>
      <img className= {imageStyle} src={posterImage} alt={`movie poster for ${title}`}/>
      <p className="movie-title">{title}</p>
      <p className="card-text">Rating | {averageRating}</p>
      <p className="card-text">Released | {releaseDate}</p>
    </article>
  )
}

export default MovieCard
