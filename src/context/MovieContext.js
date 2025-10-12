import { createContext, useReducer, useEffect } from "react";

const MovieContext = createContext();

const storedData = JSON.parse(localStorage.getItem("movies")) ?? {
  watchedMovies: [],
  likedMovies: [],
};

localStorage.setItem("movies", JSON.stringify(storedData));

const initialState = {
  isLoading: false,
  errorFlag: false,
  errorMessage: "",
  searchInput: "",
  searchedResultMovies: [],
  lessThan3CharInput: false,
  watchedMovies: storedData.watchedMovies,
  likedMovies: storedData.likedMovies,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING_STATE":
      return {
        ...state,
        isLoading: action.payload,
        errorFlag: action.payload ? false : state.errorFlag,
        errorMessage: action.payload ? "" : state.errorMessage,
        lessThan3CharInput: false,
      };
    case "ERROR_OCCURED":
      return { ...state, errorFlag: true, errorMessage: action.payload };
    case "SET_INPUT":
      return { ...state, searchInput: action.payload, isLoading: false };
    case "SEARCH_RESULTS":
      return {
        ...state,
        lessThan3CharInput: false,
        searchedResultMovies: action.payload,
      };
    case "EMPTY_INPUT":
      return {
        ...state,
        searchedResultMovies: [],
        lessThan3CharInput: false,
        errorFlag: false,
        errorMessage: "",
      };
    case "LESS_THAN_3_CHAR_INPUT":
      return {
        ...state,
        searchedResultMovies: [],
        errorFlag: false,
        errorMessage: "",
        isLoading: false,
        lessThan3CharInput: true,
      };
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watchedMovies: [...state.watchedMovies, action.payload],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watchedMovies: state.watchedMovies.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };

    default:
      return state;
  }
}

function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      const dataToStore = {
        watchedMovies: state.watchedMovies,
        likedMovies: state.likedMovies,
      };

      localStorage.setItem("movies", JSON.stringify(dataToStore));
    },
    [state.watchedMovies, state.likedMovies]
  );

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}

export { MovieContext, MovieProvider };
