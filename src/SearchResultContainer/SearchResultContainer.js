import SearchResultMovie from "../SearchResultMovie/SearchResultMovie";
import "./SearchResultContainer.css";

function SearchResultContainer() {
  return (
    <div className="search-results-container">
      <SearchResultMovie />
      <SearchResultMovie />
      <SearchResultMovie />
      <SearchResultMovie />
      <SearchResultMovie />
      <SearchResultMovie />
    </div>
  );
}

export default SearchResultContainer;
