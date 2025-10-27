import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

import HeadingH1 from "../HeadingH1/HeadingH1";
import LikedMovieDetails from "../LikeRelated/LikedMovieDetails/LikedMovieDetails";
import EmptyLiked from "../LikeRelated/EmptyLiked/EmptyLiked";

import "./LikedMovies.css";
import "../HelperStyles/HelperStyles.css";

function LikedMovies() {
  const { state } = useContext(MovieContext);
  const { likedMovies } = state;
  const [presentFilter, setPresentFilter] = useState("movie");

  const filtered = likedMovies.filter(
    (eachMovie) => eachMovie.Type === presentFilter
  );
  console.log(filtered);
  return (
    <section className="liked-movies-section">
      <div className="heading-and-btns-container">
        <HeadingH1 text={"Liked Movies"} />
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

      <div className="liked-movies-container">
        {filtered.length === 0 ? (
          <EmptyLiked />
        ) : (
          filtered.map((eachMovie) => (
            <LikedMovieDetails movie={eachMovie} key={eachMovie.imdbId} />
          ))
        )}
      </div>
    </section>
  );
}

export default LikedMovies;
