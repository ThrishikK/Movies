import { createContext, useReducer } from "react";

const MovieContext = createContext();

const initialState = { isLoading: true, searchInput: "" };

function reducer(state, action) {
  switch (action.type) {
    case "LOADING_STATE":
      return { ...state, isLoading: !state.isLoading };
    case "SET_INPUT":
      return { ...state, searchInput: action.payload };
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
