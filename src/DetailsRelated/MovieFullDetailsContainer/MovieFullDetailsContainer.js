import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";

import EmptyContainer from "../../EmptyContainer/EmptyContainer";
import FullDetailsLoader from "../FullDetailsLoader/FullDetailsLoader";
import FullDetailsComponent from "../FullDetailsComponent/FullDetailsComponent";
import "./MovieFullDetailsContainer.css";

const APIKEY = "885b416e";
// const movieId = "tt3896198";
// const urlById = `https://www.omdbapi.com/?i=${movieId}&apikey=${APIKEY}`;

// const movieDetailsArray = [
//   {
//     Title: "Eega",
//     Year: "2012",
//     Rated: "Not Rated",
//     Released: "05 Jul 2012",
//     Runtime: "145 min",
//     Genre: "Action, Comedy, Drama",
//     Director: "S.S. Rajamouli",
//     Writer: "S.S. Rajamouli, Janardhana Maharshi, Crazy Mohan",
//     Actors: "Sudeep, Nani, Samantha Ruth Prabhu",
//     Plot: "Nani loves Bindu but is killed by a jealous Sudeep, who lusts after Bindu. Nani is reincarnated as a fly and decides to avenge his death. He teams up with Bindu to make Sudeep's life a living hell.",
//     Language: "Telugu, Tamil",
//     Country: "India",
//     Awards: "43 wins & 23 nominations",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTA0MDFmMDMtMTE5OC00YWQ0LWIwZTUtOWIwMjk4Yjc3NGY1XkEyXkFqcGc@._V1_SX300.jpg",
//     Ratings: [
//       {
//         Source: "Internet Movie Database",
//         Value: "7.7/10",
//       },
//       {
//         Source: "Rotten Tomatoes",
//         Value: "100%",
//       },
//     ],
//     Metascore: "N/A",
//     imdbRating: "7.7",
//     imdbVotes: "28,014",
//     imdbID: "tt2258337",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "N/A",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "Guardians of the Galaxy Vol. 2",
//     Year: "2017",
//     Rated: "PG-13",
//     Released: "05 May 2017",
//     Runtime: "136 min",
//     Genre: "Action, Adventure, Comedy",
//     Director: "James Gunn",
//     Writer: "James Gunn, Dan Abnett, Andy Lanning",
//     Actors: "Chris Pratt, Zoe Saldaña, Dave Bautista",
//     Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
//     Language: "English",
//     Country: "United States",
//     Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
//     Ratings: [
//       {
//         Source: "Internet Movie Database",
//         Value: "7.6/10",
//       },
//       {
//         Source: "Rotten Tomatoes",
//         Value: "85%",
//       },
//       {
//         Source: "Metacritic",
//         Value: "67/100",
//       },
//     ],
//     Metascore: "67",
//     imdbRating: "7.6",
//     imdbVotes: "809,834",
//     imdbID: "tt3896198",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "$389,813,101",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
// ];

function MovieFullDetailsContainer() {
  const { state } = useContext(MovieContext);
  const { selectedMovieId } = state;
  const [loadingFullMovieDetails, setLoadingFullMovieDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(
    function () {
      if (selectedMovieId) {
        setLoadingFullMovieDetails(true);
        //fetch movie details by id
        const fetchMovieDetailsById = async function () {
          try {
            const response = await fetch(
              `https://www.omdbapi.com/?i=${selectedMovieId}&apikey=${APIKEY}`
            );
            const data = await response.json();
            setMovieDetails(data);
            document.title = `${data.Title} - Movie Details`;
          } catch (error) {
            console.error("Error fetching movie details:", error);
          } finally {
            setLoadingFullMovieDetails(false);
          }
        };
        fetchMovieDetailsById();
      }
      return function () {
        document.title = `Movie App`;
      };
    },
    [selectedMovieId]
  );

  return (
    <section className="movie-full-details-section">
      {!selectedMovieId && !loadingFullMovieDetails && (
        <EmptyContainer message="Click on any movie to get more details in liked or watched sections." />
      )}
      {loadingFullMovieDetails && <FullDetailsLoader />}
      {movieDetails && <FullDetailsComponent details={movieDetails} />}
    </section>
  );
}

export default MovieFullDetailsContainer;
