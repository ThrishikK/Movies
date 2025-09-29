import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

import Loader from "../Loader/Loader";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import MovieBasicDetailsContainer from "../MovieBasicDetailsContainer/MovieBasicDetailsContainer";

import "../HelperStyles/HelperStyles.css";
import "./SearchResults.css";

const APIKEY = "885b416e";

const urlBySearch = `https://www.omdbapi.com/?apikey=${APIKEY}&s=`;

function SearchResults({ selectedId, setSelectedId, onSelectMovie, query }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieBasicDetails, setMovieBasicDetails] = useState([]);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(`${urlBySearch}&s=${query}`, {
            signal: controller.signal,
          });
          // console.log(res.ok);
          if (!res.ok) throw new Error("Something went wrong!!!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          // console.log(data);
          setMovieBasicDetails(data.Search);
          //BELOW SETTING ID FOR MOVIE DETAILS COMPONENT THAT IS FIRST RESULT IN THE 10 RESULTS OF SEARCH.
          setSelectedId(data.Search[0].imdbID);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovieBasicDetails([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <div className="d-flex-column movie-box movie-search-container">
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <MovieBasicDetailsContainer
          selectedId={selectedId}
          onSelectMovie={onSelectMovie}
          movieBasicDetails={movieBasicDetails}
        />
      )}
      {error && <ErrorComponent message={error} />}
    </div>
  );
}

export default SearchResults;
