import { useContext } from "react";
import "./WatchedMovieDetails.css";
import { MovieContext } from "../../context/MovieContext";
// import "../HelperStyles/HelperStyles.css";

const roughData = {
  Title: "Interstellar",
  Year: "2014",
  imdbID: "tt0816692",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
};

function WatchedMovieDetails({ movie }) {
  const { dispatch } = useContext(MovieContext);
  return (
    <div className="watched-movie-details">
      {/* IMAGE AND DATA */}
      <div className="image-and-data-container">
        <div className="watched-movie-poster">
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
        <div className="watched-movie-data">
          <h2>{movie.Title}</h2>
          <p>
            <span className="watched-movie-data-key">Year :</span>
            {movie.Year}
          </p>
          <p>
            <span className="watched-movie-data-key">Type : </span>
            {movie.Type}
          </p>
          <p>
            <span className="watched-movie-data-key">imdbID : </span>
            {movie.imdbID}
          </p>
        </div>
      </div>
      {/* BUTTONS CONTAINER */}
      <div className="watched-movie-btns-container">
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_WATCHED", payload: movie.imdbID })
          }
        >
          Remove
        </button>
        <button>More Info</button>
      </div>
    </div>
  );
}

export default WatchedMovieDetails;
