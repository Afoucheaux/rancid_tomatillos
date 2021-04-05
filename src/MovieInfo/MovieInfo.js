import React from "react";

const MovieInfo = (props) => {
  const trailerToPlay = `https://www.youtube.com/embed/${props.trailer.key}`;
  const genres = props.singleMovie.genres.join(" | ");
  return (
  <section className="extra-info-container">
  <iframe className="extra-info-trailer" src={trailerToPlay} title="Movie Trailer" aria-label={`${props.singleMovie.title} trailer`} data-cy="trailer"></iframe>
  <p className="extra-info" data-cy="overview">{props.singleMovie.overview}</p>
  <p className="extra-info" data-cy="genre">{genres}</p>
  <p className="extra-info" data-cy="runtime">Runtime: {props.singleMovie.runtime} min</p>
</section>
  )
}

export default MovieInfo;