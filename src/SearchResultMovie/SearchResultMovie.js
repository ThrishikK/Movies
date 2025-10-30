import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import "./SearchResultMovie.css";

const unavailableMoviePosters = [
  "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=484",
  "https://images.unsplash.com/photo-1623179007436-1d366e78ba68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031",
  "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=879",
];

function SearchResultMovie({ movie }) {
  const { state, dispatch } = useContext(MovieContext);

  const { watchedMovies, likedMovies } = state;
  const watchedIds = watchedMovies.map((eachMovie) => eachMovie.imdbID);
  const likedIds = likedMovies.map((eachMovie) => eachMovie.imdbID);

  const alreadyWatched = watchedIds.includes(movie.imdbID);
  const alreadyLiked = likedIds.includes(movie.imdbID);

  console.log(alreadyWatched);

  const movieImage =
    movie.Poster === "N/A"
      ? unavailableMoviePosters[Math.floor(Math.random() * 5)]
      : movie.Poster;

  return (
    <div className="search-result-movie-container">
      <div className="movie-text-container">
        <div className="details-container">
          {/* IMAGE */}
          <div className="image-container">
            <img src={movieImage} alt={movie.Title} />
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
          {alreadyWatched ? (
            <button className="already-watched">Already Watched</button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_WATCHED", payload: movie })
              }
            >
              Add to Watched
            </button>
          )}

          {alreadyLiked ? (
            <button className="already-watched">Already Liked</button>
          ) : (
            <button
              onClick={() => dispatch({ type: "ADD_TO_LIKED", payload: movie })}
            >
              Add to Liked
            </button>
          )}

          <button
            onClick={() =>
              dispatch({ type: "SET_SELECTED_MOVIE_ID", payload: movie.imdbID })
            }
          >
            <Link to="/more-info" className="more-info-link">
              More Info
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchResultMovie;
