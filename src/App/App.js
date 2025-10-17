import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "../context/MovieContext";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";
import WatchedMovies from "../WatchedMovies/WatchedMovies";
import LikedMovies from "../LikedMovies/LikedMovies";
import RecommendedMovies from "../RecommendRelated/RecommendedMovies/RecommendedMovies";
import MovieFullDetailsContainer from "../DetailsRelated/MovieFullDetailsContainer/MovieFullDetailsContainer";

import "./App.css";
import "./breakpoints.css";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <BrowserRouter basename="/Movies">
          <NavBar />
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/watched" element={<WatchedMovies />} />
            <Route path="/liked" element={<LikedMovies />} />
            <Route path="/recommended" element={<RecommendedMovies />} />
            <Route path="//more-info" element={<MovieFullDetailsContainer />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
}

export default App;
