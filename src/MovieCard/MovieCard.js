import React from "react";
import "./MovieCard.css";
import PropTypes from "prop-types";

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

MovieCard.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  posterImage: PropTypes.string,
  title: PropTypes.string,
  averageRating: PropTypes.number,
  releaseDate: PropTypes.string,
  handleMovieClick: PropTypes.string,
  classStyle: PropTypes.string,
  imageStyle: PropTypes.string
};
