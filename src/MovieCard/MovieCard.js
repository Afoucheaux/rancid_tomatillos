import React from "react";
import "./MovieCard.css"

const MovieCard = (props) => {
  return (
    <article className="card-container">
      <img className= "card-image" src={props.movieInfo.posterImage} alt={`movie poster for ${props.movieInfo.title}`}/>
      <p className="card-text">{props.movieInfo.title}</p>
      <p className="card-text">{props.movieInfo.averageRating}</p>
      <p className="card-text">{props.movieInfo.releaseDate}</p>
    </article>
  )
}

export default MovieCard