import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

import HeadingH1 from "../HeadingH1/HeadingH1";
import WatchedMovieDetails from "../WatchRelated/WatchedMovieDetails/WatchedMovieDetails";
import EmptyWatched from "../WatchRelated/EmptyWatched/EmptyWatched";

import "./WatchedMovies.css";
import "../HelperStyles/HelperStyles.css";

function WatchedMovies() {
  const { state } = useContext(MovieContext);
  const { watchedMovies } = state;
  const [presentFilter, setPresentFilter] = useState("movie");

  const filtered = watchedMovies.filter(
    (eachMovie) => eachMovie.Type === presentFilter
  );
  console.log(filtered);

  return (
    <section className="watched-movies-section">
      <div className="heading-and-btns-container">
        <HeadingH1 text={"Watched Movies"} />
        <div className="movie-series-filter">
          <button
            onClick={() => setPresentFilter("movie")}
            className={
              presentFilter === "movie"
                ? "selected-button"
                : "not-selected-button"
            }
          >
            Movies
          </button>
          <button
            onClick={() => setPresentFilter("series")}
            className={
              presentFilter === "series"
                ? "selected-button"
                : "not-selected-button"
            }
          >
            Series
          </button>
        </div>
      </div>

      <div className="watched-movies-container">
        {filtered.length === 0 ? (
          <EmptyWatched />
        ) : (
          filtered.map((eachMovie) => (
            <WatchedMovieDetails movie={eachMovie} key={eachMovie.imdbId} />
          ))
        )}
      </div>
    </section>
  );
}

export default WatchedMovies;
