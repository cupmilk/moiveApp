import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Movie = (props) => {
  const { movieId, title, year, movieImg, rating, summary, category } = props;
  return (
    <div>
      <h2>
        <Link to={`/movie/${movieId}`}>
          {title} ({year})
        </Link>
      </h2>
      <img src={movieImg} alt={title} />
      <div>movie rating : {rating}</div>
      <p>{summary}</p>
      <ul>
        {category.map((genres) => (
          <li key={genres}>{genres} </li>
        ))}
      </ul>
    </div>
  );
};

Movie.propType = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  movieImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
