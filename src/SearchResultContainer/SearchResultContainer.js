import SearchResultMovie from "../SearchResultMovie/SearchResultMovie";
import "./SearchResultContainer.css";

function SearchResultContainer({ movies }) {
  return (
    <div className="search-results-container">
      {movies.map((movie) => (
        <SearchResultMovie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default SearchResultContainer;
