import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

import HeadingH1 from "../HeadingH1/HeadingH1";
import Loader from "../Loader/Loader";
import EmptyContainer from "../EmptyContainer/EmptyContainer";
import ErrorContainer from "../ErrorContainer/ErrorContainer";
import SearchResultContainer from "../SearchResultContainer/SearchResultContainer";

import "./Search.css";
import "../HelperStyles/HelperStyles.css";

const APIKEY = "885b416e";

const urlBySearch = `https://www.omdbapi.com/?apikey=${APIKEY}&s=`;

function Search() {
  const { state, dispatch } = useContext(MovieContext);

  const {
    isLoading,
    errorFlag,
    searchInput,
    searchedResultMovies,
    errorMessage,
    lessThan3CharInput,
  } = state;

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          dispatch({ type: "LOADING_STATE", payload: true });

          const res = await fetch(`${urlBySearch}&s=${searchInput}`, {
            signal: controller.signal,
          });
          console.log(res.ok);
          if (!res.ok) throw new Error("Something went wrong!!!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          // console.log(data);
          dispatch({ type: "SEARCH_RESULTS", payload: data.Search });
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            dispatch({ type: "ERROR_OCCURED", payload: err.message });
          }
        } finally {
          dispatch({ type: "LOADING_STATE", payload: false });
        }
      }

      if (searchInput.length === 0) {
        dispatch({ type: "EMPTY_INPUT" });
        return;
      }

      if (searchInput.length >= 1 && searchInput.length < 3) {
        dispatch({ type: "LESS_THAN_3_CHAR_INPUT" });
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [searchInput, dispatch]
  );

  return (
    <section className="search-section-container">
      <HeadingH1 text={"Search"} />
      {/* INPUT FORM */}
      <form>
        <input
          className="search-input"
          type="text"
          value={searchInput}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT", payload: e.target.value })
          }
        />
      </form>
      {/* RESULTS */}
      <div className="movie-results-container">
        {searchInput.length === 0 && !lessThan3CharInput && (
          <EmptyContainer message={"Search any movie name for details"} />
        )}
        {lessThan3CharInput && (
          <EmptyContainer message={"Please enter at least 3 characters"} />
        )}
        {isLoading && <Loader />}
        {errorFlag && <ErrorContainer errorMessage={errorMessage} />}
        {!isLoading &&
          !errorFlag &&
          searchInput &&
          searchedResultMovies.length > 0 && (
            <SearchResultContainer movies={searchedResultMovies} />
          )}
      </div>
    </section>
  );
}

export default Search;
