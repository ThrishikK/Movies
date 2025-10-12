import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import "./SearchResultMovie.css";

function SearchResultMovie({ movie }) {
  const { state, dispatch } = useContext(MovieContext);

  return (
    <div className="search-result-movie-container">
      <div className="movie-text-container">
        <div className="details-container">
          {/* IMAGE */}
          <div className="image-container">
            <img src={movie.Poster} alt={movie.Title} />
          </div>{" "}
          {/*  */}
          {/* KEY VALUE PAIRS */}
          <div className="key-value-container">
            {/* Title */}
            <div className="key-value-pair">
              <p className="key">
                <bold>Title :</bold>
              </p>
              <p className="value">{movie.Title}</p>
            </div>
            {/* Year */}
            <div className="key-value-pair">
              <p className="key">
                <bold>Year :</bold>
              </p>
              <p className="value">{movie.Year}</p>
            </div>
            {/* ID */}
            <div className="key-value-pair">
              <p className="key">
                <bold>IMDB id :</bold>
              </p>
              <p className="value">{movie.imdbID}</p>
            </div>
          </div>
        </div>
        {/* buttons container */}
        <div className="btns-container">
          <button
            onClick={() => dispatch({ type: "ADD_TO_WATCHED", payload: movie })}
          >
            Add to Watched
          </button>{" "}
          <button>Add to Liked</button>
          <button>More Details</button>
        </div>
      </div>
    </div>
  );
}

export default SearchResultMovie;
