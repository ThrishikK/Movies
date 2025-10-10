import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import HeadingH1 from "../HeadingH1/HeadingH1";
import Loader from "../Loader/Loader";
import EmptyContainer from "../EmptyContainer/EmptyContainer";
import SearchResultContainer from "../SearchResultContainer/SearchResultContainer";

import "./Search.css";
import "../HelperStyles/HelperStyles.css";

function Search() {
  const { state, dispatch } = useContext(MovieContext);

  const { isLoading, searchInput } = state;

  const roughData = [
    {
      Title: "Interstellar",
      Year: "2014",
      imdbID: "tt0816692",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Science of Interstellar",
      Year: "2014",
      imdbID: "tt4415360",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDU5NTJkMjQtNGYyZC00NjYwLWJlNWMtODk5NDI5MDE3NDJiXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ];

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
        <SearchResultContainer />
      </div>
    </section>
  );
}

export default Search;
