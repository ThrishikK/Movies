import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import HeadingH1 from "../HeadingH1/HeadingH1";
import WatchedMovieDetails from "../WatchRelated/WatchedMovieDetails/WatchedMovieDetails";
import EmptyWatched from "../WatchRelated/EmptyWatched/EmptyWatched";

import "./WatchedMovies.css";
import "../HelperStyles/HelperStyles.css";

function WatchedMovies() {
  const { state } = useContext(MovieContext);
  const { watchedMovies } = state;

  return (
    <section className="watched-movies-section">
      <HeadingH1 text={"Watched Movies"} />
      <div className="watched-movies-container">
        {watchedMovies.length === 0 ? (
          <EmptyWatched />
        ) : (
          watchedMovies.map((eachMovie) => (
            <WatchedMovieDetails movie={eachMovie} key={eachMovie.imdbId} />
          ))
        )}
      </div>
    </section>
  );
}

export default WatchedMovies;
