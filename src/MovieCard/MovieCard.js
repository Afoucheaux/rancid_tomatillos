import React from "react";
import "./MovieCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({id, posterImage, title, averageRating, releaseDate, classStyle, imageStyle}) => {
  return (
      <Link to={`/${id}`} className={classStyle}>
        <img className= {imageStyle} src={posterImage} alt={`movie poster for ${title}`}/>
        <p className="movie-title">{title}</p>
        <p className="card-text">Rating | {averageRating}</p>
        <p className="card-text">Released | {releaseDate}</p>
      </Link>
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
