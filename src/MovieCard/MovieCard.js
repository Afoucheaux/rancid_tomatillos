import React from "react";
import "./MovieCard.css"

const MovieCard = ({id, posterImage, title, averageRating, releaseDate, handleMovieClick, classStyle }) => {
  return (
    <article onClick={handleMovieClick} className={classStyle} id={id}>
      <img className= "card-image" src={posterImage} alt={`movie poster for ${title}`}/>
      <p className="card-text">{title}</p>
      <p className="card-text">Rating | {averageRating}</p>
      <p className="card-text">Released | {releaseDate}</p>
    </article>
  )
}

export default MovieCard
