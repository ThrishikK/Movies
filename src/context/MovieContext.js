import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { createContext, useReducer } from "react";

const MovieContext = createContext();

const initialState = {
  isLoading: false,
  errorFlag: false,
  errorMessage: "",
  searchInput: "",
  searchedResultMovies: [],
  lessThan3CharInput: false,
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

    default:
      return state;
  }
}

function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}

export { MovieContext, MovieProvider };
