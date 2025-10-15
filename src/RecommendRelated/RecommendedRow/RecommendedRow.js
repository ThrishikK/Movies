import { useState } from "react";
import "./RecommendedRow.css";

function RecommendedRow({ movieNamesObject }) {
  console.log(movieNamesObject);

  const total = movieNamesObject.movies.length;
  const radius = 400; // how far images sit from center

  const initialPositionsArray = movieNamesObject.movies.map(
    (_, i) => (360 / total) * i
  );

  const [positionsArray, setPositionsArray] = useState(initialPositionsArray);

  function handleNextClick() {
    setPositionsArray((prevArray) => [
      prevArray[total - 1],
      ...prevArray.slice(0, total - 1),
    ]);
    console.log(positionsArray);
  }

  function handlePreviousClick() {
    setPositionsArray((prevArray) => [
      ...prevArray.slice(1, total),
      prevArray[0],
    ]);
    console.log(positionsArray);
  }

  return (
    <div className="recommended-movies-row">
      <h2>{movieNamesObject.name}</h2>
      {/* CAROUSEL */}
      <div className="carousel">
        <div className="carousel__images">
          {movieNamesObject.movies.map((eachImag, i) => (
            <img
              key={eachImag.movieName}
              src={`${eachImag.imgAddress}`}
              alt={`${eachImag.movieName}`}
              style={{
                transform: `rotateY(${positionsArray[i]}deg) translateZ(${radius}px)`,
              }}
            />
          ))}
        </div>
      </div>
      {/* BUTTONS */}
      <div className="carousel__buttons">
        <button
          onClick={handlePreviousClick}
          className="carousel__button carousel__button--prev"
        >
          Previous
        </button>
        <button
          className="carousel__button carousel__button--next"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RecommendedRow;
