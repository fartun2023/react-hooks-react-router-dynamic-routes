import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  return (
    <div>
      {Object.keys(movies).map((movieId) => (
        <div key={movieId}>
          <Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;