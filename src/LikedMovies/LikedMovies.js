import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import HeadingH1 from "../HeadingH1/HeadingH1";
import LikedMovieDetails from "../LikeRelated/LikedMovieDetails/LikedMovieDetails";
import EmptyLiked from "../LikeRelated/EmptyLiked/EmptyLiked";

import "./LikedMovies.css";
import "../HelperStyles/HelperStyles.css";

function LikedMovies() {
  const { state } = useContext(MovieContext);
  const { likedMovies } = state;

  return (
    <section className="liked-movies-section">
      <HeadingH1 text={"Liked Movies"} />
      <div className="liked-movies-container">
        {likedMovies.length === 0 ? (
          <EmptyLiked />
        ) : (
          likedMovies.map((eachMovie) => (
            <LikedMovieDetails movie={eachMovie} key={eachMovie.imdbId} />
          ))
        )}
      </div>
    </section>
  );
}

export default LikedMovies;
